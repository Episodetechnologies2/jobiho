-- Create enquiries table for storing package enquiries submitted by users
CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `package_id` INT NULL,
  `package_name` VARCHAR(255) NOT NULL,
  `package_slug` VARCHAR(255) NULL,
  `package_duration` VARCHAR(100) NULL,
  `package_price` VARCHAR(100) NULL,
  `user_name` VARCHAR(255) NOT NULL,
  `user_email` VARCHAR(255) NOT NULL,
  `user_phone` VARCHAR(50) NOT NULL,
  `details` TEXT NULL,
  `status` ENUM('pending', 'reviewed', 'contacted', 'archived') NOT NULL DEFAULT 'pending',
  `notes` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status` (`status`),
  INDEX `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
