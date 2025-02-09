create database checklist;
use checklist;
 
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL
);


CREATE TABLE user_info (
  full_name VARCHAR(255),
  phone_number VARCHAR(255),
  email VARCHAR(255),
  address VARCHAR(255),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE programs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  user_id INT,
  status VARCHAR(255) default 'IN_PROGRESS',
  create_time datetime DEFAULT current_timestamp,
  end_time DATE,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  program_id INT,
  status VARCHAR(255) DEFAULT 'IN_PROGRESS' NOT NULL,
  create_time datetime DEFAULT current_timestamp,
  end_time DATE,
  FOREIGN KEY (program_id) REFERENCES programs(id)
);
