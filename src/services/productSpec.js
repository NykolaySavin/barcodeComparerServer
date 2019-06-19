const models = require('../db/mysql');


export default class ProductSpec {
    getById(id) {
        return models.ProductSpec.findByPk(id);
    }

    getAll() {
        return models.ProductSpec.findAll();
    }

}
