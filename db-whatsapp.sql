DROP DATABASE IF EXISTS wweb_db;
CREATE SCHEMA IF NOT EXISTS wweb_db DEFAULT CHARACTER SET utf8 ;
USE wweb_db ;


-- -----------------------------------------------------
-- Table `mydb`.`states`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS states (
  id INT NOT NULL AUTO_INCREMENT,
  state VARCHAR(45) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`citys`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS citys (
  id INT NOT NULL AUTO_INCREMENT,
  city VARCHAR(45) NOT NULL,
  state_id INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (state_id)
    REFERENCES states (id)
    ON DELETE CASCADE)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `mydb`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clients (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(13) NOT NULL,
  email VARCHAR(45) NULL,
  razao_social VARCHAR(100) NULL,
  inscricao_estadual BIGINT NULL,
  cpf VARCHAR(11) NULL,
  cnpj VARCHAR(14) NULL,
  cep VARCHAR(8) NULL,
  address VARCHAR(200) NULL,
  city_id INT NULL,
  state_id INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (city_id)
    REFERENCES citys (id)
    ON DELETE CASCADE,
  FOREIGN KEY (state_id)
    REFERENCES states (id)
    ON DELETE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`prices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS prices (
  id INT NOT NULL AUTO_INCREMENT,
  amount INT NOT NULL,
  price INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (product_id)
    REFERENCES products (id)
    ON DELETE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS employee (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  role VARCHAR(150) NOT NULL,
  birthday DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`status_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS status_order (
  id INT NOT NULL,
  status_order VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
  id INT NOT NULL AUTO_INCREMENT,
  date_orders DATE NOT NULL,
  shipping_date DATE NOT NULL,
  status_order_id INT NOT NULL,
  clients_id INT NOT NULL,
  PRIMARY KEY (`id`, `status_order_id`),
  FOREIGN KEY (status_order_id)
    REFERENCES status_order (id)
    ON DELETE CASCADE,
  FOREIGN KEY (clients_id)
    REFERENCES clients (id)
    ON DELETE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`orders_has_prices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS orders_has_prices (
  `orders_id` INT NOT NULL,
  `prices_id` INT NOT NULL,
  PRIMARY KEY (`orders_id`, `prices_id`),
  FOREIGN KEY (`orders_id`)
    REFERENCES orders (`id`)
    ON DELETE CASCADE,
  FOREIGN KEY (`prices_id`)
    REFERENCES prices (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB;

SET SQL_SAFE_UPDATES = 0;