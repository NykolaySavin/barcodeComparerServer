import * as productSpec from './productSpec';

export default async function (router) {
    router.get('/api/product',productSpec.getAllProductSpec);
    router.get('/api/product/:id',productSpec.findProductSpecById)
};
