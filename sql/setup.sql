-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists pokemon;

CREATE table pokemon (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  index INT NOT NULL
);

INSERT INTO pokemon (name, type, index) VALUES
  ('Pikachu', 'electric', 25),
  ('Charmander', 'fire', 4),
  ('Munchlax', 'normal', 446),
  ('Bellsprout', 'grass/poison', 69),
  ('Psyduck', 'water', 54);



