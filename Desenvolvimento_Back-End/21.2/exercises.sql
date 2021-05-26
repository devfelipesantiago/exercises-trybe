SELECT bo.domestic_sales,
  bo.international_sales,
  m.title
FROM BoxOffice AS bo
  JOIN Movies AS m ON m.id = bo.movie_id;
  --
SELECT bo.international_sales,
  m.title
FROM BoxOffice AS bo
  JOIN Movies AS m ON m.id = bo.movie_id
WHERE bo.domestic_sales < bo.international_sales;
--
SELECT m.title,
  b.rating
FROM BoxOffice AS b
  JOIN Movies AS m ON m.id = b.movie_id
ORDER BY b.rating DESC;
--
SELECT *
FROM Theater
  LEFT JOIN Movies ON theater_id = Theater.id
ORDER BY name;
--
SELECT *
FROM Theater AS t
  RIGHT JOIN Movies AS m ON m.theater_id = t.id
ORDER BY name;
--
SELECT name,
  location
FROM Theater
WHERE EXISTS(
    SELECT theater_id
    FROM Movies
  );
