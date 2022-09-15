const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res) {
    const { name, icon, menuIcon } = req.body;
    const type = await Type.create({ name, icon, menuIcon });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Type.findAll()
    return res.json(types)
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Type.findOne({
        where: { id },
      });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new TypeController();
