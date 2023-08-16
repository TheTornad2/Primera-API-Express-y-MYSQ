-- Active: 1691292660494@@127.0.0.1@3306@companydb
CREATE DATABASE companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

select * from employee;

INSERT INTO employee VALUES
  (1, 'Bryant', 15000),
  (2, 'Felix', 1000),
  (3, 'Victor', 20000),
  (4, 'Braylin', 6000);

