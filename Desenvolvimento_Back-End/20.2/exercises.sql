SELECT 'FELIPE';
--
SELECT 'FELIPE',
  'SANTIAGO';
--
SELECT 'FELIPE' AS Nome,
  'SANTIAGO' AS Sobrenome;
--
SELECT 10 * 5;
--
SELECT now() as 'Data Atual';
--
SELECT *
FROM sakila.city;
--
SELECT first_name,
  last_name
FROM sakila.customer;
--
SELECT *
FROM sakila.rental;
--
SELECT title,
  description,
  release_year
FROM sakila.film;
--
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do filme'
FROM sakila.film;
--
SELECT CONCAT(title, ' ', rating) AS Classificação
FROM sakila.film;
--
SELECT CONCAT(address, ' ', district) AS Endereço
FROM sakila.address;
--
SELECT DISTINCT Nome,
  Idade
FROM Alunos;
--
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
--
SELECT 1,
  2,
  3;
--
SELECT 10 + 15;
--
SELECT (3 * 4) + 12;
--
SELECT *
FROM Scientists;
--
SELECT Name AS 'Nome do Projeto',
  Hours AS 'Tempo de Trabalho'
FROM Projects;
--
SELECT Name
FROM Scientists
ORDER BY Name ASC;
--
SELECT Name
FROM Projects
ORDER BY Name DESC;
--
SELECT CONCAT(
    'O projeto ',
    Name,
    ' precisou de ',
    Hours,
    ' horas para ser concluído.'
  ) AS resultado
FROM Projects;
--
SELECT Name,
  Hours
FROM Projects
ORDER BY Hours DESC
LIMIT 3;
--
SELECT DISTINCT Project
FROM AssignedTo;
--
SELECT Name
FROM Projects
ORDER BY Hours DESC
LIMIT 1;
--
SELECT Name
FROM Projects
ORDER BY Hours ASC
LIMIT 1 OFFSET 1;
--
SELECT *
FROM Projects
ORDER BY Hours ASC
LIMIT 5;
--
SELECT CONCAT(
    'Existem ',
    COUNT(Name),
    ' cientistas na tabela Scientists.'
  ) AS resultado
FROM Scientists;
--
USE PiecesProviders;
SELECT Code,
  Name
FROM Providers
ORDER BY Name DESC
LIMIT 1;
--
SELECT Piece,
  Price
FROM Provides
ORDER BY Price DESC
LIMIT 5;
--
SELECT DISTINCT Provider,
  Price
FROM Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 3;
--
SELECT CONCAT(
    'A peça mais cara é a: ',
    Piece,
    ', provida pela empresa ',
    Provider,
    ' e custa ',
    Price,
    ' reais.'
  ) AS resultado
FROM Provides
ORDER BY Price DESC
LIMIT 1;
