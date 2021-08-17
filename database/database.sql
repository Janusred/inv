CREATE DATABASE ng_byrsa_db;

USE ng_byrsa_db;

CREATE TABLE pieza(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    descriptio VARCHAR(255),
    preciopublico INT(11),
    preciomayoreo INT(11),
    preciocredito INT(11),
    preciocompra INT(11),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE piz;