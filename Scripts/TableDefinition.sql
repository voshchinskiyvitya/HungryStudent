CREATE TABLE `test_db`.`Products`(
	`ID` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR(255),
	PRIMARY KEY (ID)
);

CREATE TABLE `test_db`.`Recipes`(
	`ID` INT NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR(255),
	`Description` VARCHAR(5000),
	PRIMARY KEY (ID)
);

CREATE TABLE `test_db`.`RecipeProducts`(
	`ID` INT NOT NULL AUTO_INCREMENT,
	`ProductID` INT NOT NULL,
	`RecipeID` INT NOT NULL,
	`Quantity` INT,
	`QuantitySuffix` VARCHAR(255),
	PRIMARY KEY (ID),
	FOREIGN KEY (`ProductID`) REFERENCES `test_db`.`Products`(`ID`),
	FOREIGN KEY (`RecipeID`) REFERENCES `test_db`.`Recipes`(`ID`)
);