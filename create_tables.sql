CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY, 
    name VARCHAR(128) UNIQUE
);

CREATE TABLE products (
    id VARCHAR(256) PRIMARY KEY,
    name VARCHAR(128) NOT NULL, 
    price FLOAT(2) NOT NULL, 
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id) 
      ON DELETE CASCADE
);