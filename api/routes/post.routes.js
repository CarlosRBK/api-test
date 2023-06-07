const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post.controller');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.get('/v1/posts', isAuthenticated, postsController.getAllPosts);

router.post('/v1/posts', isAuthenticated, postsController.createPost);

router.put('/v1/posts/:id', isAuthenticated, postsController.updatePost);

router.delete('/v1/posts/:id', isAuthenticated, postsController.deletePost);


module.exports = router;

