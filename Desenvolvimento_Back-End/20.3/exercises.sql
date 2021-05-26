SELECT *
FROM Pecas
WHERE name LIKE 'gr%';
--
SELECT *
FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;
--
SELECT peca,
  preco,
  fornecedor
FROM Fornecimentos
WHERE fornecedor LIKE '%N%';
--
SELECT *
FROM Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;
--
USE PecasFornecedores;
SELECT COUNT(*)
FROM Fornecedores
WHERE code LIKE '%F%';
--
USE PecasFornecedores;
SELECT *
FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco;
--
USE PecasFornecedores;
SELECT COUNT(*)
FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
--
USE Scientists;
SELECT *
FROM Scientists
WHERE Name LIKE "%e%";
--
USE Scientists;
SELECT Name
FROM Projects
WHERE Code LIKE "A%"
ORDER BY Name;
--
USE Scientists;
SELECT Code,
  Name
FROM Projects
WHERE Code LIKE "%3%"
ORDER BY Name;
--
USE Scientists;
SELECT Scientist
FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');
--
USE Scientists;
SELECT *
FROM Projects
WHERE Hours > 500;
--
USE Scientists;
SELECT *
FROM Projects
WHERE Hours > 250
  AND Hours < 800;
-- ou
SELECT *
FROM Projects
WHERE Hours BETWEEN 250 AND 800;
--
USE Scientists;
SELECT Code,
  Name
FROM Projects
WHERE Name NOT LIKE 'A%';
--
USE Scientists;
SELECT Name
FROM Projects
WHERE Code LIKE '%H%';
