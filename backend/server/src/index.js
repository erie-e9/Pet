/* eslint-disable */
import express from 'express';
import { createServer } from 'http';
import constants from './config/constants';
import mocks from './mocks/index';
import './config/db';
import middlewares from './config/middlewares';

const app = express();
middlewares(app);

const graphiqlServer = createServer(app);

mocks().then(() => {
    graphiqlServer.listen(constants.PORT, err => {
        if(err){
            console.log(`Error running app:  ${err}`)
        }else{
            console.log(`App running on: http://localhost:${constants.PORT}${constants.GRAPHQL_PATH}`);
        }
    })
});