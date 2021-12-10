INSERT INTO websites (url)
VALUES 
('www.google.com'), 
('www.yahoo.com'), 
('www.bing.com');

INSERT INTO users (username, email, password)
VALUES 
('Jimmy', 'jimmy@gmail.com', 'password'),
('Janey', 'janey@gmail.com', 'password'),
('Jannet', 'jannet@gmail.com', 'password');

INSERT INTO shelves (name, color, font, user_id)
VALUES
('Search Engines', 'c9324e', 'Arial', 1),
('Funny Pages', '5dc3c7', 'comicsans', 1);

INSERT INTO spines (name, color, font, shelf_id, website_id)
VALUES
('Google', '5dc3c7', 'Arial', 1, 1),
('Yahoo', '5dc3c7', 'Timesnewroman', 1, 2),
('Bing', '5dc3c7', 'comicsans', 1, 3);

