drop table client;

create table client (
 
	timearrived varchar(40) primary key ,
	message varchar(10000),
  	appear int(1)
  	
);


insert into client values('jcvn', 'Initial random message',1);
insert into client values('anki', 'Initial random message',0);
insert into client values('agrawal', 'Initial random message',1);
insert into client values('chhavi', 'Initial random message',0);
insert into client values('shrivastav', 'Initial random message',1);


--insert into clientdetail (ipaddress,username,password,description) values ('10.123.45.123','ankita','agrawal','client1')

--
--INSERT INTO customer (customer_id, emailid, name, date_of_birth) VALUES (1001,'steven@infy.com', 'Steven Martin', null);
--INSERT INTO customer (customer_id, emailid, name, date_of_birth) VALUES (1002,'kevin@infy.com', 'Kevin Nelson', null);
--INSERT INTO customer (customer_id, emailid, name, date_of_birth) VALUES (1003,'john@infy.com', 'John Matric', null);
--INSERT INTO customer (customer_id, emailid, name, date_of_birth) VALUES (1004,'chan@infy.com', 'Chan mathew', null);
--INSERT INTO customer (customer_id, emailid, name, date_of_birth) VALUES (1005,'jill@infy.com', 'Jill mathew', null);
--
--
--INSERT INTO card(card_id, card_number,expiry_date,cust_id) VALUES(12346, '6642160005012193',null,1001);
--INSERT INTO card(card_id, card_number,expiry_date,cust_id) VALUES(12347, '3642140005012179',null,1001);
--INSERT INTO card(card_id, card_number,expiry_date,cust_id) VALUES(12348, '4642140005012144',null,1001);
--INSERT INTO card(card_id, card_number,expiry_date,cust_id) VALUES(12349, '5642140005012178',null,1002);
--INSERT INTO card(card_id, card_number,expiry_date,cust_id) VALUES(12350, '6642140005012177',null,1003);
--INSERT INTO card(card_id, card_number,expiry_date,cust_id) VALUES(12351, '7642140005012173',null,1003);
--INSERT INTO card(card_id, card_number,expiry_date,cust_id) VALUES(12352, '7642140005012173',null,null);

--
--commit;
--
--
select * from client;
--select * from customer;
