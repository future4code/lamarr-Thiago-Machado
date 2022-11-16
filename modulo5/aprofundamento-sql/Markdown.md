a) O código abaixo remove a coluna salary

ALTER TABLE Actor DROP COLUMN salary;

b) O código abaixo altera gender para sex com um varchar(6) => significa q terá apena 6 caracteres 

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

c)  O código abaixo altera gender para gender com um varchar(255) => significa q terá 255 caracteres 

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)


Error Code: 1054. Unknown column 'abc' in 'where clause'
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0


O codigo abaixo faz a contagem de dois grupos expecificos o grupo female e male, q esta na coluna gender  

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender


select * from Actor;

select * from Movie;

UPDATE Actor
SET nome = "Moacyr Franco"
WHERE id = "123";

UPDATE Actor
SET 
	nome = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

UPDATE Actor
SET nome = "JULIANA PÃES"
WHERE nome = "Juliana Paes";

UPDATE Actor
SET nome = "Juliana Paes"
WHERE nome = "JULIANA PÃES";

UPDATE Actor
SET 
nome = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";


UPDATE Actor
SET 
nome = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = abc;

DELETE FROM Actor WHERE nome = "Fernanda Montenegro";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, nome FROM Actor
ORDER BY nome DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender ;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating
rating FLOAT;

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET
	playing_limit_date = "2022-12-31"
WHERE id = "002";

DELETE FROM Movie WHERE id = "001";


UPDATE Movie
SET
	synopsis = "ola mundo"
WHERE id = "001";

não consiguiu fazer atualização pq não achou o id