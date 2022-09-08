const { Product, Characteristics, Description } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, description, characteristics } =
        req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.png';
      img.mv(path.resolve(__dirname, '..', 'static', 'products', fileName));

      const product = await Product.create({
        name,
        price,
        brandId,
        typeId,
        characteristics,
        description,
        img: [fileName],
      });

      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let products;
    if (!brandId && !typeId) {
      products = await Product.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      products = await Product.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      products = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      products = await Product.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }

    return res.json(products);
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        where: { id },
        include: [
          { model: Characteristics, as: 'characteristics' },
          { model: Description, as: 'descriptions' },
        ],
      });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));

    }
  }
}

module.exports = new ProductController();
