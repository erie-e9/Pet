/* eslint-disable */
import express from 'express';
import middlewares from './config/middlewares';
import constants from './config/constants';
import mocks from './mocks/index';
import './config/db';

const app = express();
middlewares(app);

// mocks().then(() => {
    app.listen({ port: constants.PORT }, (err) => {
    if(err){
        console.log(`Error running app:  ${err}`)
    }else{        
        console.log(`🚀 Server ready at http://localhost:${constants.PORT}${constants.GRAPHQL_PATH}`)
    }
    })
// });