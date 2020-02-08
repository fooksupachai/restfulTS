import App from './app'

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import PostsController from './controller/posts/posts.controller'
import HomeController from './controller/home/home.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new PostsController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()