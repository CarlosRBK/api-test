const jwt = require('jsonwebtoken');
const secret_key = process.env.CLAVE_SECRETA

exports.login = (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'prueba' && password === '1234') {
      const token = jwt.sign({ username }, secret_key, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  };

  exports.logout = (req, res) => {  
    res.json({ message: 'Logout exitoso' });
  };