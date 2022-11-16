CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

/*   */

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

SELECT * FROM Actor;

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

/* Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'  entarda duplicada*/

INSERT INTO Actor (id, nome, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

/* Error Code: 1136. Column count doesn't match value count at row 1 */


INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

/*Error Code: 1364. Field 'nome' doesn't have a default value */

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

/*Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1*/


INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;

SELECT id, salary from Actor ;

SELECT id, nome from Actor WHERE gender = "male";

SELECT id, nome from Actor WHERE gender = "female";

SELECT nome, salary from Actor WHERE nome = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";

SELECT * FROM Actor where salary < 500000;

SELECT id, name from Actor WHERE id = "002";

/*Error Code: 1054. Unknown column 'name' in 'field list'*/

SELECT * FROM Actor
WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE nome NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE nome LIKE "%g%" OR nome LIKE "%G%";


SELECT * FROM Actor
WHERE 
	(nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%a%" OR nome LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;


CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
	"Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	10

);
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
	8
);


select * from Movie;

SELECT id, title, rating FROM Movie WHERE id = "004";

SELECT * FROM Movie WHERE title = "Deus é Brasileiro";

SELECT id, title, synopsis FROM Movie WHERE rating > 7;

SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%vida%" OR
      synopsis LIKE "%vida%";
      

SELECT * FROM Movie
WHERE release_Date < "2020-05-04";

SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%vida%" OR
      synopsis LIKE "%vida") AND rating > 7;