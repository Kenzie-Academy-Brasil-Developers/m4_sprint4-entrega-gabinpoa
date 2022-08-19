CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY, 
    name VARCHAR(128) PRIMARY KEY
);

CREATE TABLE products (
    id uuid DEFAULT uuid_generate_v4 (),
    name VARCHAR(128) NOT NULL, 
    price FLOAT(2) NOT NULL, 
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULLs
);