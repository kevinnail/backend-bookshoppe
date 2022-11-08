-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors_books;

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

CREATE TABLE authors_books(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    authors_id BIGINT,
    books_id BIGINT,
    FOREIGN KEY (authors_id)REFERENCES authors(id),
    FOREIGN KEY (books_id)REFERENCES books(id)


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
('James Clear','8/20/1972','Bellingham, WA'),
('Daniel Goleman','3/5/1962','Spokane, WA'),
('Steven Covey','1/2/1934','Portland, MN');



INSERT INTO 
    books(title, released)
VALUES

('Verbal Judo',1993),
('I Spy the Lie',2012),
('Braving the Wilderness', 2017),
('Anxiety, Phobias, and Panic', 1995),
('Made to Stick', 2007),
('The Sale', 1993),
('Atomic Habits',2018),
('Switch',2010),
('Emotional Intelligence',1995),
('The 7 Habits of Highly Effective People',2004);



INSERT INTO
    authors_books(authors_id,books_id)
VALUES  
    (1,1),
    (2,1),
    (3,2),
    (4,2),
    (5,2),
    (6,3),
    (7,4),
    (8,5),
    (8,8),
    (9,5),
    (9,8),
    (10,6),
    (11,7),
    (12,9),
    (13,10);