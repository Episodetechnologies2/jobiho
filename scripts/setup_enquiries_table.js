const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Basic .env parser
function loadEnvFile(fileName) {
  const envPath = path.join(__dirname, '../', fileName);
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        const val = valueParts.join('=').trim();
        if (key && val) {
          process.env[key.trim()] = val;
        }
      }
    });
  }
}
loadEnvFile('.env');
loadEnvFile('.env.development');

async function tryConnect(config) {
  try {
    const conn = await mysql.createConnection(config);
    console.log(`Connected with host: ${config.host}, port: ${config.port}, user: ${config.user}, db: ${config.database}`);
    return conn;
  } catch (e) {
    console.log(`Failed connecting with host: ${config.host}, port: ${config.port}, user: ${config.user}: ${e.message}`);
    return null;
  }
}

async function setupEnquiriesTable() {
  const configsToTry = [
    {
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'jobiho_db'
    },
    {
      host: '127.0.0.1',
      port: 3307,
      user: 'root',
      password: '',
      database: 'jobiho_db'
    },
    {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'jobiho_db'
    }
  ];

  let connection = null;
  for (const cfg of configsToTry) {
    connection = await tryConnect(cfg);
    if (connection) break;
  }

  if (!connection) {
    console.error('All connection attempts failed.');
    process.exit(1);
  }

  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        package_id INT NULL,
        package_name VARCHAR(255) NOT NULL,
        package_slug VARCHAR(255) NULL,
        package_duration VARCHAR(100) NULL,
        package_price VARCHAR(100) NULL,
        user_name VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        user_phone VARCHAR(50) NOT NULL,
        details TEXT NULL,
        status ENUM('pending', 'reviewed', 'contacted', 'archived') NOT NULL DEFAULT 'pending',
        notes TEXT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_status (status),
        INDEX idx_created_at (created_at)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `;

    await connection.query(createTableQuery);
    console.log('Successfully created or verified "enquiries" table.');
    await connection.end();
  } catch (err) {
    console.error('Error executing query:', err);
    process.exit(1);
  }
}

setupEnquiriesTable();
