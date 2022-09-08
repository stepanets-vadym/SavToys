const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

module.exports = function(role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
  
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Користувач не авторизований' });
      }
      const decoder = jwt.verify(token, process.env.SECRET_KEY);
      if(decoder.role !== role) { 
        return res.status(403).json({ message: 'В доступі відмовлено' });

      }
      req.user = decoder;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Користувач не авторизований' });
    }
  };
}






