const jwt = require('jsonwebtoken');
const secret_key = process.env.CLAVE_SECRETA

exports.isAuthenticated = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader) {
      return res.status(401).json({ error: 'Acceso no autorizado.' });
    }
  
    const token = authorizationHeader.split(' ')[1];
    
    try {
      const decoded = jwt.verify(token, secret_key);
      console.log('Decoded token:', decoded);
      req.user = decoded;
      next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
          return res.status(401).json({ error: 'El token ha expirado' });
        }
        if (error.name === 'JsonWebTokenError') {
          return res.status(401).json({ error: 'Token inválido' });
        }
        console.error('Error al verificar el token:', error);
        return res.status(401).json({ error: 'Acceso no autorizado' });
      }
  };