CREATE DATABASE wiki_test;
USE wiki_test;
CREATE TABLE donors(
    id INT AUTO_INCREMENT NOT NULL,
    last_name TEXT NOT NULL,
    first_name TEXT NOT NULL,
    street_address TEXT NOT NULL,
    city TEXT NOT NULL,
    state_region TEXT NOT NULL,
    country TEXT NOT NULL,
    zip TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    contact TEXT NOT NULL,
    payment_type TEXT NOT NULL,
    payment_frequency TEXT NOT NULL,
    payment_amount FLOAT NOT NULL,
    comments TEXT DEFAULT NULL,
    PRIMARY KEY (id)
);