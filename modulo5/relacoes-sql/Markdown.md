1)
a)R: Chave estrageira faz ligação com a tabela de origem dos dados

c)R: Error Code: 1062. Duplicate entry '001' for key 'PRIMARY' entrada duplicada, pois não foi capaz de adicionar um comentario a um filme q não exite!

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4417067-thiago-machado`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) não pode apagar uma linha pai, pois tem uma retição de chave estrageira.


2)

a)R: Essa tabela faz a comunicação entre as duas tabelas

C)R: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4417067-thiago-machado`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))Não pode adicionar uma linha, pois os id's não exitem!.
 
 D)R: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4417067-thiago-machado`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)) não pode apagar uma linha pai, pois tem uma retição de chave estrageira.


3)

a)R: ON é a condição pela qual será feita a junção das tabelas!



CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comments TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comments, rate, movie_id) 
VALUES (
		"001",
		"Muito bom!",
		7,
		"004"
);

INSERT INTO Rating (id, comments, rate, movie_id) 
VALUES (
		"001",
		"Muito bom!",
		7,
		"001"
);

ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie 
WHERE id='004';

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
		"001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"002",
		"003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
		"004"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"002",
		"001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
		"003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
		"004"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"001",
		"010"
);

DELETE FROM Actor 
WHERE id='004';

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT m.id, m.title, r.rate FROM Movie m
JOIN Rating r ON m.id = r.movie_id;

SELECT Actor.nome, Movie.title FROM Actor
JOIN MovieCast ON Actor.id = MovieCast.actor_id
join Movie on Movie.id = MovieCast.movie_id;

select * from Rating;
select * from Movie;
select * from Actor;
select * from MovieCast;

describe MovieCast;
