const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// Load .env file variables into process.env if present
try {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        // Remove quotes if present
        if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
          value = value.substring(1, value.length - 1);
        } else if (value.length > 0 && value.charAt(0) === "'" && value.charAt(value.length - 1) === "'") {
          value = value.substring(1, value.length - 1);
        }
        if (!process.env[key]) {
          process.env[key] = value.trim();
        }
      }
    });
  }
} catch (err) {
  console.warn('Could not load .env file:', err.message);
}


function escapeSql(val) {
  if (val === undefined || val === null) return 'NULL';
  if (typeof val === 'number') return val;
  if (typeof val === 'boolean') return val ? 1 : 0;
  if (typeof val === 'object') {
    return `'${JSON.stringify(val).replace(/\\/g, '\\\\').replace(/'/g, "''")}'`;
  }
  return `'${val.replace(/\\/g, '\\\\').replace(/'/g, "''")}'`;
}

async function run() {
  const host = process.env.DB_HOST || '127.0.0.1';
  const port = parseInt(process.env.DB_PORT || '3307');
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'jobiho_db';

  console.log(`Connecting to MySQL on ${host}:${port} as ${user}...`);

  let connection;
  try {
    connection = await mysql.createConnection({ host, port, user, password });
  } catch (err) {
    console.error('Failed to connect to MySQL:', err.message);
    process.exit(1);
  }

  // We will build the schema.sql content during execution
  let sqlDump = [];
  sqlDump.push(`-- Tour & Package Database Schema and Initial Data`);
  sqlDump.push(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  sqlDump.push(`USE \`${database}\`;\n`);

  console.log(`Creating database \`${database}\` if not exists...`);
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
  await connection.query(`USE \`${database}\``);

  // Table Definitions
  const dropTables = [
    `DROP TABLE IF EXISTS \`tour_package_images\`;`,
    `DROP TABLE IF EXISTS \`tour_package_travel_tips\`;`,
    `DROP TABLE IF EXISTS \`tour_package_things_to_do\`;`,
    `DROP TABLE IF EXISTS \`tour_package_itinerary\`;`,
    `DROP TABLE IF EXISTS \`tour_packages\`;`
  ];

  for (const q of dropTables) {
    sqlDump.push(q);
    await connection.query(q);
  }
  sqlDump.push('');

  const tableQueries = {
    tour_packages: `CREATE TABLE \`tour_packages\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`slug\` VARCHAR(255) UNIQUE NOT NULL,
  \`name\` VARCHAR(255) NOT NULL,
  \`country\` VARCHAR(255) NOT NULL,
  \`region\` VARCHAR(255) NOT NULL,
  \`tagline\` VARCHAR(255),
  \`hero_image\` VARCHAR(255),
  \`overview\` TEXT,
  \`coords_lon\` DOUBLE,
  \`coords_lat\` DOUBLE,
  \`tag\` VARCHAR(100),
  \`tag_color\` VARCHAR(100),
  \`short_description\` TEXT,
  \`thumbnail_image\` VARCHAR(255),
  \`status\` VARCHAR(20) DEFAULT 'published',
  \`price\` VARCHAR(255),
  \`duration\` VARCHAR(100),
  \`quick_fact_capital\` VARCHAR(255),
  \`quick_fact_currency\` VARCHAR(255),
  \`quick_fact_climate\` VARCHAR(255),
  \`quick_fact_best_season\` VARCHAR(255),
  \`quick_fact_languages\` VARCHAR(255),
  \`quick_fact_time_zone\` VARCHAR(255),
  \`quick_fact_driving_side\` VARCHAR(255),
  \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,

    tour_package_itinerary: `CREATE TABLE \`tour_package_itinerary\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`tour_package_id\` INT NOT NULL,
  \`day_number\` INT NOT NULL,
  \`title\` VARCHAR(255) NOT NULL,
  \`location\` VARCHAR(255) NOT NULL,
  \`description\` TEXT,
  \`highlights\` JSON,
  \`image_url\` VARCHAR(255),
  \`sort_order\` INT DEFAULT 0,
  FOREIGN KEY (\`tour_package_id\`) REFERENCES \`tour_packages\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,

    tour_package_things_to_do: `CREATE TABLE \`tour_package_things_to_do\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`tour_package_id\` INT NOT NULL,
  \`title\` VARCHAR(255) NOT NULL,
  \`description\` TEXT,
  \`icon_name\` VARCHAR(255),
  \`sort_order\` INT DEFAULT 0,
  FOREIGN KEY (\`tour_package_id\`) REFERENCES \`tour_packages\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,

    tour_package_travel_tips: `CREATE TABLE \`tour_package_travel_tips\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`tour_package_id\` INT NOT NULL,
  \`tip\` TEXT NOT NULL,
  \`sort_order\` INT DEFAULT 0,
  FOREIGN KEY (\`tour_package_id\`) REFERENCES \`tour_packages\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,

    tour_package_images: `CREATE TABLE \`tour_package_images\` (
  \`id\` INT AUTO_INCREMENT PRIMARY KEY,
  \`tour_package_id\` INT NOT NULL,
  \`image_url\` VARCHAR(255) NOT NULL,
  \`sort_order\` INT DEFAULT 0,
  FOREIGN KEY (\`tour_package_id\`) REFERENCES \`tour_packages\` (\`id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
  };

  for (const [tableName, q] of Object.entries(tableQueries)) {
    console.log(`Creating table \`${tableName}\`...`);
    sqlDump.push(q + '\n');
    await connection.query(q);
  }

  // Load JSON data
  const jsonPath = path.join(__dirname, '../src/data/initial-tours.json');
  console.log(`Loading initial tours data from ${jsonPath}...`);
  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const tours = JSON.parse(rawData);

  console.log(`Migrating ${tours.length} tour packages...`);

  for (const tour of tours) {
    const qf = tour.quickFacts || {};
    const coords = tour.coords || [0, 0];

    const packageInsert = `INSERT INTO \`tour_packages\` (
  \`slug\`, \`name\`, \`country\`, \`region\`, \`tagline\`, \`hero_image\`, \`overview\`, 
  \`coords_lon\`, \`coords_lat\`, \`tag\`, \`tag_color\`, \`short_description\`, \`thumbnail_image\`, 
  \`status\`, \`price\`, \`duration\`, 
  \`quick_fact_capital\`, \`quick_fact_currency\`, \`quick_fact_climate\`, \`quick_fact_best_season\`, 
  \`quick_fact_languages\`, \`quick_fact_time_zone\`, \`quick_fact_driving_side\`
) VALUES (
  ${escapeSql(tour.slug)}, ${escapeSql(tour.name)}, ${escapeSql(tour.country)}, ${escapeSql(tour.region)}, 
  ${escapeSql(tour.tagline)}, ${escapeSql(tour.heroImage)}, ${escapeSql(tour.overview)}, 
  ${coords[0]}, ${coords[1]}, ${escapeSql(tour.tag)}, ${escapeSql(tour.tagColor)}, 
  ${escapeSql(tour.shortDescription)}, ${escapeSql(tour.thumbnailImage)}, 
  ${escapeSql(tour.status || 'published')}, ${escapeSql(tour.price)}, ${escapeSql(tour.duration)}, 
  ${escapeSql(qf.capital)}, ${escapeSql(qf.currency)}, ${escapeSql(qf.climate)}, ${escapeSql(qf.bestSeason)}, 
  ${escapeSql(qf.languages)}, ${escapeSql(qf.timeZone)}, ${escapeSql(qf.drivingSide)}
);`;

    sqlDump.push(packageInsert);
    const [pkgResult] = await connection.query(packageInsert);
    const tourPackageId = pkgResult.insertId;

    // Itinerary
    if (tour.itinerary && Array.isArray(tour.itinerary)) {
      let sortOrder = 0;
      for (const day of tour.itinerary) {
        const itinInsert = `INSERT INTO \`tour_package_itinerary\` (
  \`tour_package_id\`, \`day_number\`, \`title\`, \`location\`, \`description\`, \`highlights\`, \`image_url\`, \`sort_order\`
) VALUES (
  ${tourPackageId}, ${day.day}, ${escapeSql(day.title)}, ${escapeSql(day.location)}, 
  ${escapeSql(day.description)}, ${escapeSql(day.highlights)}, ${escapeSql(day.image)}, ${sortOrder++}
);`;
        sqlDump.push(itinInsert);
        await connection.query(itinInsert);
      }
    }

    // Things to Do
    if (tour.thingsToDo && Array.isArray(tour.thingsToDo)) {
      let sortOrder = 0;
      for (const thing of tour.thingsToDo) {
        const thingInsert = `INSERT INTO \`tour_package_things_to_do\` (
  \`tour_package_id\`, \`title\`, \`description\`, \`icon_name\`, \`sort_order\`
) VALUES (
  ${tourPackageId}, ${escapeSql(thing.title)}, ${escapeSql(thing.description)}, ${escapeSql(thing.iconName)}, ${sortOrder++}
);`;
        sqlDump.push(thingInsert);
        await connection.query(thingInsert);
      }
    }

    // Travel Tips
    if (tour.travelTips && Array.isArray(tour.travelTips)) {
      let sortOrder = 0;
      for (const tip of tour.travelTips) {
        const tipInsert = `INSERT INTO \`tour_package_travel_tips\` (
  \`tour_package_id\`, \`tip\`, \`sort_order\`
) VALUES (
  ${tourPackageId}, ${escapeSql(tip)}, ${sortOrder++}
);`;
        sqlDump.push(tipInsert);
        await connection.query(tipInsert);
      }
    }

    // Gallery / Images
    if (tour.gallery && Array.isArray(tour.gallery)) {
      let sortOrder = 0;
      for (const image of tour.gallery) {
        const imgInsert = `INSERT INTO \`tour_package_images\` (
  \`tour_package_id\`, \`image_url\`, \`sort_order\`
) VALUES (
  ${tourPackageId}, ${escapeSql(image)}, ${sortOrder++}
);`;
        sqlDump.push(imgInsert);
        await connection.query(imgInsert);
      }
    }

    sqlDump.push(''); // spacing in sql dump
  }

  // Write out schema.sql
  const schemaPath = path.join(__dirname, '../schema.sql');
  console.log(`Writing complete schema.sql to ${schemaPath}...`);
  fs.writeFileSync(schemaPath, sqlDump.join('\n'), 'utf8');

  console.log('Migration completed successfully and schema.sql generated!');
  await connection.end();
}

run().catch(err => {
  console.error('Fatal error during migration:', err);
  process.exit(1);
});
