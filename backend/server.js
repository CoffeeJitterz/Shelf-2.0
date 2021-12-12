const express = require('express');
const userRoutes = require('./src/users/routes');
const shelfRoutes = require('./src/shelves/routes');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors()) // Use this after the variable declaration

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World")
});

app.use('/api/users', userRoutes);
app.use('/api/shelves', shelfRoutes);

app.listen(port, () => {
  console.log(`app listening on  port ${port}` )
});