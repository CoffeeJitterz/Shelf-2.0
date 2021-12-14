INSERT INTO websites (url)
VALUES 
('www.google.com'), 
('www.yahoo.com'), 
('www.bing.com'),
('www.funnyjunk.com'),
('www.ebaumsworld.com'),
('www.amazon.com'),
('www.ebay.com'),
('www.kijiji.com'),
('www.addictinggames'),
('www.miniclip.com'),
('www.coffeebreakarcade.com');


INSERT INTO users (username, email, password)
VALUES 
('Jimmy', 'jimmy@gmail.com', 'password'),
('Janey', 'janey@gmail.com', 'password'),
('Jannet', 'jannet@gmail.com', 'password');

INSERT INTO shelves (name, color, font, user_id)
VALUES
('Search Engines', 'c9324e', 'Arial', 1),
('Funny Pages', '5dc3c7', 'comicsans', 1),
('Shopping', '9c66ff', 'Arial', 1),
('Games', 'ff0392', 'comicsans', 1);

INSERT INTO spines (name, color, font, shelf_id, website_id)
VALUES
('Google', '5dc3c7', 'Arial', 1, 1),
('Yahoo', '5dc3c7', 'Timesnewroman', 1, 2),
('Bing', '5dc3c7', 'comicsans', 1, 3),
('funnyjunk', '5dc3c7', 'comicsans', 2, 4),
('ebaumsworld', '5dc3c7', 'comicsans', 2, 5),
('Amazon', '5dc3c7', 'Arial', 3, 6),
('ebay', '5dc3c7', 'timesNewroman', 3, 7),
('Kijiji', '5dc3c7', 'comicsans', 3, 8),
('addictinggames', '5dc3c7', 'Arial', 4, 9),
('miniclip', '5dc3c7', 'Arial', 4, 10),
('coffeebreakarcade', '5dc3c7', 'comicsans', 4, 11);
