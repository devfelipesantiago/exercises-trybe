DELIMITER $$
CREATE TRIGGER trigger_movie_insert BEFORE
INSERT
  ON movies FOR EACH ROW BEGIN
SET
  INTO NEW.release_year = YEAR(NOW());
END $$
DELIMITER ;
--
DELIMITER $$
CREATE TRIGGER trigger_movies_logs_insert
AFTER
INSERT
  ON movies FOR EACH ROW BEGIN
SET
  INTO movies_logs(movie_id, executed_action, log_date)
VALUES
(NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;
--
DELIMITER $$
CREATE TRIGGER trigger_movie_update
BEFORE
UPDATE
  ON movies FOR EACH ROW BEGIN
SET NEW.ticket_price_estimation = IF (NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
  INSERT INTO movies_logs(movie_id, executed_action, log_date)
  VALUES(NEW.movie_id, 'UPDATE', NOW());
  END $$
DELIMITER ;
--
DELIMITER $$

CREATE TRIGGER trigger_movie_delete
    BEFORE DELETE ON movies
    FOR EACH ROW
BEGIN
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;
--
