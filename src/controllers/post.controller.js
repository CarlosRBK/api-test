const axios = require('axios');
const urlApi = process.env.API_URL;

// Obtener todas las publicaciónes
exports.getAllPosts = async (req, res) => {
  try {
    const response = await axios.get(`${urlApi}/posts`);
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
};

// Obtener una publicación por su ID
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${urlApi}/posts/${id}`);
    const post = response.data;
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
};

// Crear una nueva publicación
exports.createPost = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const response = await axios.post(`${urlApi}/posts`, {
      title,
      body,
      userId,
    });
    const newPost = response.data;
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
};

// Actualizar una publicación existente
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const { title, body, userId } = req.body;
    const response = await axios.put(`${urlApi}/posts/${id}`, {
      title,
      body,
      userId,
    });
    const updatedPost = response.data;
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
};

// Eliminar un posto existente
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${urlApi}/posts/${id}`);
    res.json({ message: 'Post eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
};
