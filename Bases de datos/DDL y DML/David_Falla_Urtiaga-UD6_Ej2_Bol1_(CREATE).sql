CREATE DATABASE libreria;

CREATE TABLE libro (
	isbn 			VARCHAR(15),
	titulo 			VARCHAR(150) NOT NULL,
	dni_autor 		CHAR(11) NOT NULL,
	cod_genero 		INTEGER NOT NULL,
	cod_editorial	INTEGER NOT NULL,
	CONSTRAINT pk_libro PRIMARY KEY (isbn),
	CONSTRAINT fk_libro_autor FOREIGN KEY (dni_autor) REFERENCES autor,
	CONSTRAINT fk_libro_genero FOREIGN KEY (cod_genero) REFERENCES genero,
	CONSTRAINT fk_libro_editorial FOREIGN KEY (cod_editorial) REFERENCES editorial
);


CREATE TABLE autor (
	dni 			CHAR(9),
	nombre 			VARCHAR(300) NOT NULL,
	nacionalidad	VARCHAR(100),
	CONSTRAINT pk_autor PRIMARY KEY (dni)
	
);


CREATE TABLE editorial (
	cod_editorial	SERIAL,
	nombre 			VARCHAR(300) NOT NULL,
	direccion		VARCHAR(300),
	poblacion		VARCHAR(200),
	CONSTRAINT pk_editorial PRIMARY KEY (cod_editorial)
);


CREATE TABLE genero (
	id_genero		SERIAL,
	nombre			VARCHAR(300) NOT NULL,
	descripción		VARCHAR(1500),
	CONSTRAINT pk_genero PRIMARY KEY (id_genero)
);


CREATE TABLE edicion (
	isbn 				VARCHAR(15),
	fecha_publicacion	DATE,
	cantidad 			INTEGER,
	CONSTRAINT cantidad_positiva CHECK (cantidad > 0),
	CONSTRAINT pk_edicion PRIMARY KEY (isbn, fecha_publicacion),
	CONSTRAINT fk_edicion_libro FOREIGN KEY (isbn) REFERENCES libro
);