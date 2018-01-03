import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools';
import constants from './config/constants';
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema';
import mocks from './mocks/page';
import './config/db';

const app = express();
const schema = makeExecutableSchema({
        typeDefs, 
        resolvers
    });

app
    .use(bodyParser.json())
    .use('/graphiql', graphiqlExpress({
        endpointURL: constants.GRAPHQL_PATH
    }))
    .use(constants.GRAPHQL_PATH, graphqlExpress({
        schema
    }))
const graphiqlServer = createServer(app);

mocks().then(() => {
    graphiqlServer.listen(constants.PORT, err => {
        if(err){
            console.log(`Error running app:  ${err}`)
        }else{
            console.log(`App running on: localhost:${constants.PORT}/graphiql`);
        }
    })
})