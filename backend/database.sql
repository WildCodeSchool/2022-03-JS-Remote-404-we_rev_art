-- MySQL Script generated by MySQL Workbench
-- Wed Jun 15 14:10:24 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering


-- -----------------------------------------------------
-- Schema werevart
-- -----------------------------------------------------
DROP TABLE IF EXISTS `werevart`.`profil_has_artwork` ;
DROP TABLE IF EXISTS `werevart`.`profil_has_skills` ;
DROP TABLE IF EXISTS `werevart`.`profil_has_softwareused` ;
DROP TABLE IF EXISTS `werevart`.`profil_has_contracttype` ;
DROP TABLE IF EXISTS `werevart`.`profil_has_usertype` ;
DROP TABLE IF EXISTS `werevart`.`profil` ;
DROP TABLE IF EXISTS `werevart`.`artwork` ;
DROP TABLE IF EXISTS `werevart`.`user` ;
DROP TABLE IF EXISTS `werevart`.`picture` ;
DROP TABLE IF EXISTS `werevart`.`typeaccount` ;
DROP TABLE IF EXISTS `werevart`.`skills` ;
DROP TABLE IF EXISTS `werevart`.`softwareused` ;
DROP TABLE IF EXISTS `werevart`.`contracttype` ;
DROP TABLE IF EXISTS `werevart`.`usertype` ;
-- -----------------------------------------------------
-- Table `werevart`.`user`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`user` (
  `id` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO
  `user` (`id`,`email`, `password`)
VALUES
  ('fd274f1a-ecb4-11ec-8ea0-0242ac120002','quentin.bill812@gmail.com', 'testPassword1'),
  ('5437622c-ecb5-11ec-8ea0-0242ac120002','aurore.obert@gmail.com', 'testPassword2'),
  ('5c512ede-ecb5-11ec-8ea0-0242ac120002','etienne.bacle85@gmail.com', 'testPassword3'),
  ('644929ca-ecb5-11ec-8ea0-0242ac120002','mc.mc@gmail.com', 'testPassword4')
;

-- -----------------------------------------------------
-- Table `werevart`.`picture`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`picture` (
  `idpicture` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) NULL,
  `alt` VARCHAR(255) NULL,
  PRIMARY KEY (`idpicture`))
ENGINE = InnoDB;

INSERT INTO  `picture`(`image`,`alt`)
 VALUES
    ('https://randomwordgenerator.com/img/picture-generator/52e7d544435ab10ff3d8992cc12c30771037dbf852547941742673dc944e_640.jpg','route cassée'),
    ('https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80','main entouré d un anneau')
;

-- -----------------------------------------------------
-- Table `werevart`.`typeaccount`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`typeaccount` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO
    `typeaccount` (`type`)
VALUES 
    ('digital Artist'),
    ('customer')
;


-- -----------------------------------------------------
-- Table `werevart`.`profil`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`profil` (
  `id` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `typeaccount_id` INT,
  `picture_idpicture` INT,
  `firstname` VARCHAR(255),
  `lastname` VARCHAR(255),
  `adress` VARCHAR(255),
  `postcode` INT,
  `city` VARCHAR(255),
  `country` VARCHAR(255),
  `username` VARCHAR(255),
  `namecompagny` VARCHAR(255),
  `compagnyregistration` INT,
  `countryregistration` VARCHAR(255),
  `description` LONGTEXT,
  PRIMARY KEY (`id`, `typeaccount_id`),
  INDEX `fk_profil_user1_idx` (`user_id` ASC),
  INDEX `fk_profil_picture1_idx` (`picture_idpicture` ASC),
  INDEX `fk_profil_typeaccount1_idx` (`typeaccount_id` ASC),
  CONSTRAINT `fk_profil_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `werevart`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profil_picture1`
    FOREIGN KEY (`picture_idpicture`)
    REFERENCES `werevart`.`picture` (`idpicture`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profil_typeaccount1`
    FOREIGN KEY (`typeaccount_id`)
    REFERENCES `werevart`.`typeaccount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO
    `profil`(`user_id`,`id`,`firstName`, `lastName`, `adress`, `postcode`,`city`,`country`,`username`,`typeaccount_id`, `picture_idpicture`)
VALUES
    ('fd274f1a-ecb4-11ec-8ea0-0242ac120002','beef8662-ecb5-11ec-8ea0-0242ac120002','Quentin','Billac','rue rene boylesve',37160,'Descartes','France','Quentin',1,NULL),
    ('5437622c-ecb5-11ec-8ea0-0242ac120002','cb0255ce-ecb5-11ec-8ea0-0242ac120002','Aurore','Obert','rue de la soif',29000,'Brest','France','Aurore',1,NULL),
    ('5c512ede-ecb5-11ec-8ea0-0242ac120002','d0a47566-ecb5-11ec-8ea0-0242ac120002','Etienne','Bacle','rue de loseille',33000,'Bordeaux','France','Etienne',2,1),
    ('644929ca-ecb5-11ec-8ea0-0242ac120002','d35d38d8-ecb5-11ec-8ea0-0242ac120002','MC','MC','Rue de la vieille',34000,'Montpellier','France','MC',2,2)
;


-- -----------------------------------------------------
-- Table `werevart`.`skills`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `skills` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO
    `skills` (`skills`)
VALUES
    ('motion'),
    ('VR'),
    ('3D'),
    ('painting'),
    ('photography')
;

-- -----------------------------------------------------
-- Table `werevart`.`softwareused`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`softwareused` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `software` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO
    `softwareused` (`software`)
VALUES 
    ('Harmony'),
    ('Maya'),
    ('TvPaint'),
    ('Blender'),
    ('Animate'),
    ('After Effects'),
    ('Lightroom'),
    ('Photoshop')
;

-- -----------------------------------------------------
-- Table `werevart`.`contracttype`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`contracttype` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contract` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO
    `contracttype` (`contract`)
VALUES
    ('paid service'),
    ('free collaboration')
;

-- -----------------------------------------------------
-- Table `werevart`.`artwork`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`artwork` (
  `id` VARCHAR(255) NOT NULL,
  `hashtag` VARCHAR(255) NULL,
  `title` VARCHAR(255) NOT NULL,
  `timeframe` VARCHAR(255) NULL,
  `customer` VARCHAR(255) NULL,
  `date` DATE NOT NULL,
  `budget` INT NULL,
  `offers` INT NULL,
  `details` TEXT NULL,
  `deadline` DATE NULL,
  `likes` INT NULL,
  `picture_idpicture_original` INT NOT NULL,
  `picture_idpicture_digital` INT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_artwork_picture1_idx` (`picture_idpicture_original` ASC),
  INDEX `fk_artwork_picture2_idx` (`picture_idpicture_digital` ASC),
  INDEX `fk_artwork_skills1_idx` (`skills_id` ASC),
  CONSTRAINT `fk_artwork_picture1`
    FOREIGN KEY (`picture_idpicture_original`)
    REFERENCES `werevart`.`picture` (`idpicture`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_artwork_picture2`
    FOREIGN KEY (`picture_idpicture_digital`)
    REFERENCES `werevart`.`picture` (`idpicture`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_artwork_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `werevart`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `artwork`(`id`,`hashtag`,`title`,`timeframe`,`customer`,`date`,`budget`,`offers`,`details`,`deadline`,`likes`,`picture_idpicture_original`,`picture_idpicture_digital`,`skills_id`)
VALUES
    ('ffd79002-ecb5-11ec-8ea0-0242ac120002','#test1#test2#test3#test4','route fissurée','contemporain','','2022-06-14',1000,0,'je veux que la route se casse a cause d un tremblement de terre','2022-07-14',0,1,1,5),
    ('09bf63f6-ecb6-11ec-8ea0-0242ac120002','#test4#test6#test7#test8','main entourée d un anneau','contemporain','','2022-06-15',500,0,'je veux que l anneau tourne autours de la main','2022-06-30',0,2,2,2)
;

-- -----------------------------------------------------
-- Table `werevart`.`profil_has_artwork`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_artwork` (
  `profil_id` VARCHAR(255) NOT NULL,
  `artwork_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`profil_id`, `artwork_id`),
  INDEX `fk_profil_has_artwork_artwork1_idx` (`artwork_id` ASC),
  INDEX `fk_profil_has_artwork_profil1_idx` (`profil_id` ASC),
  CONSTRAINT `fk_profil_has_artwork_profil1`
    FOREIGN KEY (`profil_id`)
    REFERENCES `werevart`.`profil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profil_has_artwork_artwork1`
    FOREIGN KEY (`artwork_id`)
    REFERENCES `werevart`.`artwork` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `werevart`.`profil_has_artwork` (
    `profil_id`,
  `artwork_id`)
VALUES
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002','ffd79002-ecb5-11ec-8ea0-0242ac120002'),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002','09bf63f6-ecb6-11ec-8ea0-0242ac120002')
;

-- -----------------------------------------------------
-- Table `werevart`.`profil_has_skills`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_skills` (
  `profil_id` VARCHAR(255) NOT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `skills_id`),
  INDEX `fk_profil_has_skills_skills1_idx` (`skills_id` ASC),
  INDEX `fk_profil_has_skills_profil1_idx` (`profil_id` ASC),
  CONSTRAINT `fk_profil_has_skills_profil1`
    FOREIGN KEY (`profil_id`)
    REFERENCES `werevart`.`profil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profil_has_skills_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `werevart`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `werevart`.`profil_has_skills` (
  `profil_id`,
  `skills_id`)
VALUES
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',3),
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',2),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',1),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',5)
;

-- -----------------------------------------------------
-- Table `werevart`.`profil_has_softwareused`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_softwareused` (
  `profil_id` VARCHAR(255) NOT NULL,
  `softwareused_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `softwareused_id`),
  INDEX `fk_profil_has_softwareused_softwareused1_idx` (`softwareused_id` ASC),
  INDEX `fk_profil_has_softwareused_profil1_idx` (`profil_id` ASC),
  CONSTRAINT `fk_profil_has_softwareused_profil1`
    FOREIGN KEY (`profil_id`)
    REFERENCES `werevart`.`profil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profil_has_softwareused_softwareused1`
    FOREIGN KEY (`softwareused_id`)
    REFERENCES `werevart`.`softwareused` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `werevart`.`profil_has_softwareused` (
  `profil_id`,
  `softwareused_id`)
VALUES
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',2),
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',4),
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',5),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',6),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',8),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',4)
;

-- -----------------------------------------------------
-- Table `werevart`.`profil_has_contracttype`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_contracttype` (
  `profil_id` VARCHAR(255) NOT NULL,
  `contracttype_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `contracttype_id`),
  INDEX `fk_profil_has_contacttype_contacttype1_idx` (`contracttype_id` ASC),
  INDEX `fk_profil_has_contacttype_profil1_idx` (`profil_id` ASC),
  CONSTRAINT `fk_profil_has_contacttype_profil1`
    FOREIGN KEY (`profil_id`)
    REFERENCES `werevart`.`profil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profil_has_contacttype_contacttype1`
    FOREIGN KEY (`contracttype_id`)
    REFERENCES `werevart`.`contracttype` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `werevart`.`profil_has_contracttype` (
  `profil_id`,
  `contracttype_id`)
VALUES
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',1),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',1),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',2)
;

-- -----------------------------------------------------
-- Table `werevart`.`usertype`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `werevart`.`usertype` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usertype` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO 
    `usertype` (`usertype`)
VALUES
    ('A traditionnal artist'),
    ('A Museum'),
    ('An illustrator'),
    ('A gallery'),
    ('An art collector'),
    ('An art lover'),
    ('A digital artist'),
    ('A studio')
;
-- -----------------------------------------------------
-- Table `werevart`.`profil_has_usertype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_usertype` (
  `profil_id` VARCHAR(255) NOT NULL,
  `usertype_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `usertype_id`),
  INDEX `fk_profil_has_usertype_usertype1_idx` (`usertype_id` ASC),
  INDEX `fk_profil_has_usertype_profil1_idx` (`profil_id` ASC),
  CONSTRAINT `fk_profil_has_usertype_profil1`
    FOREIGN KEY (`profil_id`)
    REFERENCES `werevart`.`profil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profil_has_usertype_usertype1`
    FOREIGN KEY (`usertype_id`)
    REFERENCES `werevart`.`usertype` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `werevart`.`profil_has_usertype` (
  `profil_id`,
  `usertype_id`)
  VALUES
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',7),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',8),
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',1),
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',2),
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',5),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',6),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',3),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',4)
;