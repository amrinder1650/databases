DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message varchar(255) default null,
  roomname varchar(255) default null,
  userid INT,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(255) not null,
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);

ALTER TABLE messages ADD FOREIGN KEY (userid) references users (id);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the databsase and the tables.*/

