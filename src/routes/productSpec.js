import ProductSpec from '../services/productSpec';
import handleError from '../common/handleErrors';

const productSpec = new ProductSpec();

export async function findProductSpecById(context) {
    context.body = await productSpec
        .getById(context.params.id).catch(handleError.bind(this));
}
export async function getAllProductSpec(context) {
    context.body = await productSpec.getAll().catch(handleError.bind(this));
}