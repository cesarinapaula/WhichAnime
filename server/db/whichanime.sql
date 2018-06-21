DROP DATABASE IF EXISTS whichanime;
CREATE DATABASE whichanime;

\c whichanime;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
userid VARCHAR NOT NULL
);

CREATE TABLE genre (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
genre VARCHAR NOT NULL
);

CREATE TABLE keyword (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
userkeyword VARCHAR NOT NULL
);

CREATE TABLE randomanime (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
randomnumber INTEGER NOT NULL
);






