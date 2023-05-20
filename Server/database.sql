CREATE TABLE users(
  user_id int,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);
-- 
-- 
CREATE SEQUENCE user_id_sequence START WITH 1 INCREMENT BY 1 NO MAXVALUE NO MINVALUE CACHE 1;
-- 
-- 
ALTER TABLE users
ALTER COLUMN user_id
SET DEFAULT nextval('user_id_sequence');
-- 
-- 
CREATE TABLE todos(
  todo_id SERIAL,
  user_id int,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- 
--fake users data
insert into users (user_name, user_email, user_password)
values ('Jacob', 'jacob@gmail.com', 'kthl8822');
-- 
--fake todos data
insert into todos (user_id, description)
values (1, 'clean room');
-- 
-- 
-- expenditure old table
-- CREATE TABLE expenditure (
--     exp SERIAL PRIMARY KEY,
--     user_id INT,
--     Loan_id VARCHAR(50),
--     Ifsc_code VARCHAR(50),
--     Loan_amount DECIMAL(10,2),
--     Card_balance DECIMAL(10,2),
--     Credit_score INT,
--     Stock_name VARCHAR(50),
--     Stock_price DECIMAL(10,2),
--     Total_Stock_price DECIMAL(10,2),
--     FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );
-- 
-- expenditure new table
CREATE TABLE expenditure (
  exp SERIAL PRIMARY KEY,
  user_id INT,
  loan_id VARCHAR(50),
  ifsc_code VARCHAR(11),
  loan_amount DECIMAL(10, 2),
  card_type VARCHAR(50),
  card_number VARCHAR(16),
  card_amount DECIMAL(10, 2),
  stock_name VARCHAR(50),
  stock_price DECIMAL(10, 2),
  mf_name VARCHAR(50),
  mf_price DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- 
-- finance_planning
CREATE TABLE finance_planning (
  f_id SERIAL PRIMARY KEY,
  user_id int,
  Bike_amount DECIMAL(10, 2),
  Car_amount DECIMAL(10, 2),
  Home_amount DECIMAL(10, 2),
  Loan_with_interest DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- 
-- expenditure
-- INSERT INTO expenditure (
--     user_id,
--     Loan_id,
--     Ifsc_code,
--     Loan_amount,
--     Card_balance,
--     Credit_score,
--     Stock_name,
--     Stock_price,
--     Total_Stock_price
--   )
-- VALUES (
--     1,
--     'L001',
--     'ABC123',
--     10000.00,
--     5000.00,
--     750,
--     'AAPL',
--     200.00,
--     400.00
--   ),
--   (
--     2,
--     'L002',
--     'DEF456',
--     15000.00,
--     8000.00,
--     650,
--     'GOOG',
--     300.00,
--     900.00
--   ),
--   (
--     1,
--     'L003',
--     'GHI789',
--     20000.00,
--     10000.00,
--     800,
--     'MSFT',
--     150.00,
--     300.00
--   ),
--   (
--     3,
--     'L004',
--     'JKL012',
--     12000.00,
--     6000.00,
--     700,
--     'TSLA',
--     250.00,
--     750.00
--   ),
--   (
--     2,
--     'L005',
--     'MNO345',
--     18000.00,
--     9000.00,
--     600,
--     'AMZN',
--     400.00,
--     1600.00
--   );
-- 
-- 
-- finance_planning
INSERT INTO finance_planning (
    Bike_amount,
    Car_amount,
    Home_amount,
    Loan_with_interest
  )
VALUES (2000.00, 5000.00, 100000.00, 50000.00),
  (3000.00, 6000.00, 120000.00, 75000.00),
  (4000.00, 7000.00, 150000.00, 100000.00);
-- 
-- userdetails
CREATE TABLE userdetails (
  id serial primary key,
  user_id int,
  address varchar(255),
  aadharvid int,
  pannumber int,
  dob date,
  phonenumber int,
  FOREIGN key (user_id) references users(id)
);