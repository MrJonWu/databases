CREATE DATABASE chat1;

USE chat1;

CREATE TABLE users (
  id int,
  name varchar(255),

  CONSTRAINT PRIMARY KEY (id)
  /* Describe your table here.*/
);

CREATE TABLE room (
  id int,
  roomName varchar(255),

  CONSTRAINT PRIMARY KEY (id)
  /* Describe your table here.*/
);

CREATE TABLE messages (
  id int,
  msg varchar(255),
  createdAt int,
  roomId int,
  userId int,
  username varchar(255),
  roomname varchar(255),
  CONSTRAINT PRIMARY KEY (id),
  CONSTRAINT FOREIGN KEY (roomId) REFERENCES room(id),
  CONSTRAINT FOREIGN KEY (userId) REFERENCES users(id)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root< server/schema.sql 
 *  to create the database and the tables.*/

