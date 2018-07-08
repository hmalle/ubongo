DROP DATABASE IF EXISTS braaaaainsDB;
CREATE DATABASE braaaaainsDB;

USE braaaaainsDB;

CREATE TABLE Users(
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  PRIMARY KEY(username)
);
