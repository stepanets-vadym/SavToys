const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role, lastName, firstName } = req.body;
    if (!email && password) {
      next(ApiError.badRequest('Не коректний email або пароль'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('Користувач з таким email вже існує'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword, lastName, firstName });
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token, user});
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Користувач не знайдений '));
    }

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Не вірний пароль'));
    }

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token, user });
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role );
    return res.json({ token });
  }
}

module.exports = new UserController();
