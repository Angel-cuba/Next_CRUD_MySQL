CREATE DATABASE products;

use products;

CREATE TABLE product (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   description VARCHAR(355) NOT NULL,
   price DECIMAL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe product