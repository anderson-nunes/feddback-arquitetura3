-- Active: 1700003202931@@127.0.0.1@3306
DROP TABLE products;
DROP TABLE ratings;

CREATE TABLE products (
id TEXT PRIMARY KEY UNIQUE NOT NULL,
name TEXT NOT NULL,
price REAL NOT NULL,
stock INTEGER NOT NULL,
image_url TEXT NOT NULL,
rating INTEGER NOT NULL DEFAULT(0)
);

INSERT INTO products (id, name, price, stock, image_url, rating)
VALUES
('p001', 'Monitor', 500, 10, 'imagem01', 0),
('p002', 'Mouse', 50, 5, 'imagem02', 0),
('p003', 'Cadeira Gamer', 700, 8, 'imagem03', 0);

SELECT * FROM  products;

DELETE FROM products WHERE id = 'p002';

CREATE TABLE ratings (
product_id TEXT NOT NULL,
stars INTEGER NOT NULL,
FOREIGN KEY (product_id) REFERENCES products(id)
ON UPDATE CASCADE
ON DELETE CASCADE
);

INSERT INTO ratings (product_id, stars)
VALUES
('p002', 5);

UPDATE products
SET rating = 5
WHERE id = 'p002';

