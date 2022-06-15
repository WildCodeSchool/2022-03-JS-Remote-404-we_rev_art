-- MySQL Script generated by MySQL Workbench
-- Wed Jun 15 14:10:24 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema werevart
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema werevart
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `werevart` DEFAULT CHARACTER SET utf8 ;
USE `werevart` ;

-- -----------------------------------------------------
-- Table `werevart`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`user` (
  `id` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`, `email`, `password`));


-- -----------------------------------------------------
-- Table `werevart`.`picture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`picture` (
  `idpicture` INT NOT NULL,
  `image` VARCHAR(255) NULL,
  `alt` VARCHAR(255) NULL,
  PRIMARY KEY (`idpicture`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `werevart`.`typeaccount`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`typeaccount` (
  `id` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`, `type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `werevart`.`profil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`profil` (
  `id` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  `typeaccount_id` VARCHAR(255) NOT NULL,
  `picture_idpicture` INT NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `postcode` INT NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `namecompagny` VARCHAR(255) NULL,
  `compagnyregistration` INT NULL,
  `countryregistration` VARCHAR(255) NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`id`, `typeaccount_id`),
  INDEX `fk_profil_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_profil_picture1_idx` (`picture_idpicture` ASC) VISIBLE,
  INDEX `fk_profil_typeaccount1_idx` (`typeaccount_id` ASC) VISIBLE,
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


-- -----------------------------------------------------
-- Table `werevart`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`skills` (
  `id` INT NOT NULL,
  `skills` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`, `skills`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `werevart`.`softwareused`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`softwareused` (
  `id` INT NOT NULL,
  `software` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`, `software`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `werevart`.`contracttype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`contracttype` (
  `id` INT NOT NULL,
  `contract` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`, `contract`))
ENGINE = InnoDB;


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
  `skills_skills` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_artwork_picture1_idx` (`picture_idpicture_original` ASC) VISIBLE,
  INDEX `fk_artwork_picture2_idx` (`picture_idpicture_digital` ASC) VISIBLE,
  INDEX `fk_artwork_skills1_idx` (`skills_skills` ASC) VISIBLE,
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
    FOREIGN KEY (`skills_skills`)
    REFERENCES `werevart`.`skills` (`skills`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `werevart`.`profil_has_artwork`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_artwork` (
  `profil_id` VARCHAR(255) NOT NULL,
  `artwork_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`profil_id`, `artwork_id`),
  INDEX `fk_profil_has_artwork_artwork1_idx` (`artwork_id` ASC) VISIBLE,
  INDEX `fk_profil_has_artwork_profil1_idx` (`profil_id` ASC) VISIBLE,
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


-- -----------------------------------------------------
-- Table `werevart`.`profil_has_skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_skills` (
  `profil_id` VARCHAR(255) NOT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `skills_id`),
  INDEX `fk_profil_has_skills_skills1_idx` (`skills_id` ASC) VISIBLE,
  INDEX `fk_profil_has_skills_profil1_idx` (`profil_id` ASC) VISIBLE,
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


-- -----------------------------------------------------
-- Table `werevart`.`profil_has_softwareused`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_softwareused` (
  `profil_id` VARCHAR(255) NOT NULL,
  `softwareused_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `softwareused_id`),
  INDEX `fk_profil_has_softwareused_softwareused1_idx` (`softwareused_id` ASC) VISIBLE,
  INDEX `fk_profil_has_softwareused_profil1_idx` (`profil_id` ASC) VISIBLE,
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


-- -----------------------------------------------------
-- Table `werevart`.`profil_has_contracttype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_contracttype` (
  `profil_id` VARCHAR(255) NOT NULL,
  `contracttype_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `contracttype_id`),
  INDEX `fk_profil_has_contacttype_contacttype1_idx` (`contracttype_id` ASC) VISIBLE,
  INDEX `fk_profil_has_contacttype_profil1_idx` (`profil_id` ASC) VISIBLE,
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


-- -----------------------------------------------------
-- Table `werevart`.`usertype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`usertype` (
  `id` INT NOT NULL,
  `usertype` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`, `usertype`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `werevart`.`profil_has_usertype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `werevart`.`profil_has_usertype` (
  `profil_id` VARCHAR(255) NOT NULL,
  `usertype_id` INT NOT NULL,
  PRIMARY KEY (`profil_id`, `usertype_id`),
  INDEX `fk_profil_has_usertype_usertype1_idx` (`usertype_id` ASC) VISIBLE,
  INDEX `fk_profil_has_usertype_profil1_idx` (`profil_id` ASC) VISIBLE,
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
