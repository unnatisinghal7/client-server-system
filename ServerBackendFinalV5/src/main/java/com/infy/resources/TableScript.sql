DROP TABLE server;

CREATE TABLE server(
	ipaddress varchar(20) primary key,
	description VARCHAR(5000) NOT NULL,
	appear varchar(1) not null
);

--INSERT INTO server VALUES('localhost','Testing localhost','1');
--INSERT INTO server VALUES('locahost','Testing host','1');
--INSERT INTO server VALUES('localhos','Testing','0');
SELECT * FROM server;
--UPDATE server s SET s.description = 'jhwfhi' , s.appear ='1' where s.ipaddress ='locahost';
