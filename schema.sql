CREATE DATABASE brixbizdb;

USE brixbizdb;

CREATE TABLE business (
	id INTEGER(11) AUTO_INCREMENT,
    nameId VARCHAR (8),
    website VARCHAR (10),
    addressBuilding VARCHAR (15),
    addressStreetName VARCHAR (15),
    secondaryAddressStreetName VARCHAR (15),
	addressCity VARCHAR (15),
	addressState VARCHAR (15),
	addresZIP INTEGER(11),
	contactPhoneNumber INTEGER (11),
	addressBorough	VARCHAR (15),
	Longitude	Decimal(9,6),
	Latitude Decimal(9,6),
	Location Decimal(9,6),
	brixbizRegistered BOOL,
	inventory BOOL,
	inventroyId VARCHAR (10),
	biztype VARCHAR (15),
	bizcategory1 VARCHAR (15),
	bizcategory2 VARCHAR (15),
	bizcategory3 VARCHAR (15),
	Specialty VARCHAR (15),
	image VARBINARY (50),
	bio VARCHAR (250),
    PRIMARY KEY (id)
);

CREATE TABLE searchTerms (
	id INTEGER (11) auto_increment,
    searchTerm VARCHAR (25),
    primary key (id)
);

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT,
    
)