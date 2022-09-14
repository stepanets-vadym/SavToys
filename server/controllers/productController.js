const {
  Product,
  Brand,
  Characteristics,
  Description,
} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ProductController {
  async create(req, res, next) {
    try {
      const {
        name,
        price,
        brandId,
        typeId,
        description,
        characteristics,
        newProd,
        bestseller,
        discount,
      } = req.body;

      const files = req.files.img;
      let fileNames = [];
      let promises = [];

      if (Array.isArray(files)) {
        files.forEach((file) => {
          file.name = uuid.v4() + '.png';
          const savePath = path.resolve(
            __dirname,
            '..',
            'static',
            'products',
            file.name
          );
          promises.push(file.mv(savePath));
          fileNames.push(file.name);
        });

        await Promise.all(promises);
      } else {
        const { img } = req.files;
        let fileName = uuid.v4() + '.png';
        img.mv(path.resolve(__dirname, '..', 'static', 'products', fileName));
        fileNames.push(fileName);
      }
      // const id = brandId
      // const getbrand = await Brand.findOne({
      //   where: { id },
      // });

      const product = await Product.create({
        name,
        price,
        brandId,
        typeId,
        characteristics,
        description,
        img: fileNames,
        newProd,
        bestseller,
        discount,
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
