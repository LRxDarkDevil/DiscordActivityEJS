const express = require('express');
const path = require('path');
require('dotenv').config(); // Load .env variables if available

const app = express();

// Configure EJS as our view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files if needed
app.use(express.static(path.join(__dirname, 'public')));

// Render index.ejs and pass in the Discord client ID
app.get('/', (req, res) => {
  res.render('index', {
    clientId: process.env.DISCORD_CLIENT_ID
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
