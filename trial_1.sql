CREATE TABLE USER_1 (
user_id int primary key,
first_name VARCHAR (40),
last_name VARCHAR (40),
contact_email VARCHAR (40),
contact_phone INT (12)
);


CREATE TABLE PARK_SPACE (
pspace_id int primary key,
pspace_name VARCHAR (40),
pspace_address VARCHAR (150),
pspace_email VARCHAR (40),
pspace_phone INT (12),
pspace_description VARCHAR (300),
pspace_fees INT (5)
);


CREATE TABLE SPS_TRANSACTION(
transaction_id int primary key,
user_id int,
account_reference VARCHAR (40),
bill_reference VARCHAR (40),
recipient_reference VARCHAR (80),
transaction_amount int (10),
transaction_time datetime,
OTP INT (6),

FOREIGN KEY (user_id)  REFERENCES user_1(user_id) ON DELETE CASCADE
);
