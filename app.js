const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const postsRoutes = require('./src/routes/post.routes');
const authRoutes = require('./src/routes/auth.routes');

app.use(express.json());

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/auth', authRoutes);
app.use('/api', postsRoutes);

module.exports = app;
