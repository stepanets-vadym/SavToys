const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class BrandController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.png';
      img.mv(path.resolve(__dirname, '..', 'static', 'brands', fileName));

      const brand = await Brand.create({ name, img: fileName });
      return res.json(brand);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Brand.findOne({
        where: { id },
      });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BrandController();
