-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;
CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    date_of_birth DATE,
    place_of_birth VARCHAR 
);

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released BIGINT NOT NULL
);

INSERT INTO 
    authors(name, date_of_birth, place_of_birth)
VALUES 
('George J. Thompson', '12/4/1940', 'Seattle, WA'),
('Jerry B. Jenkins', '4/6/1952', 'San Fransisco, CA'),
('Philip Houston','6/3/1932','New York, NY'),
('Michael Floyd','8/29/1960','Eugene, OR'),
('Suan Carnicero','9/1/1968','Atlanta, GA'),
('Brene Brown','3/7/1955','Houston, TX'),
('Reneau Z. Peurifoy','12/31/49','Denver, CO'),
('Chip Heath','6/3/1970','Boston, MA'),
('Dan Heath','9/29/1966','Boston, MA'),
('Don Hutson','2/15/1943','Lexington, KY'),
('James Clear','8/20/1972','Bellingham, WA');


