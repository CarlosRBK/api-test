const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post.controller');
const { isAuthenticated } = require('../middleware/jwt.middleware');

/**
 * @openapi
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         userId:
 *           type: number
 *           example: 1
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
 *         body:
 *           type: string
 *           example: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * /api/v1/posts:
 *   get:
 *     tags:
 *       - Post
 *     summary: Obtener todos los posts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *
 *   post:
 *     tags:
 *       - Post
 *     summary: Crear un nuevo post
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *
 * /api/v1/posts/{id}:
 *   put:
 *     tags:
 *       - Post
 *     summary: Actualizar un post existente
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         description: ID del post a actualizar
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Post not found
 *
 *   delete:
 *     tags:
 *       - Post
 *     summary: Eliminar un post existente
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         description: ID del post a eliminar
 *         required: true
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Post not found
 */

router.get('/v1/posts', isAuthenticated, postsController.getAllPosts);

router.post('/v1/posts', isAuthenticated, postsController.createPost);

router.put('/v1/posts/:id', isAuthenticated, postsController.updatePost);

router.delete('/v1/posts/:id', isAuthenticated, postsController.deletePost);


module.exports = router;

