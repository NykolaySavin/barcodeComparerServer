import koaRouter from 'koa-router';
import bodyParser from 'koa-body';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import routeConfig from '../routes/index';

export default function(app) {
    app.use(helmet());
    app.use(bodyParser({
        multipart: true,
    }));
    app.use(logger());
    const router = koaRouter();
    routeConfig(router);
    app.use(router.routes());
};
