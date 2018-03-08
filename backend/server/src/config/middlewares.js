/* eslint-disable no-param-reassign */
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import constants from './constants';
import resolvers from '../graphql/resolvers';
import typeDefs from '../graphql/schema';
import { decodeToken } from '../services/auth';

const schema = makeExecutableSchema({
    typeDefs, 
    resolvers
});

async function auth(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (token != null) {
            const user = await decodeToken(token);
            req.user = user;
        } else {
            req.user = null;
        }
        return next();
    } catch (error) {
        throw error;
    }
}

export default app => {
    app
    .use(bodyParser.json())
    .use(auth)
    .use('/graphiql', graphiqlExpress({
        endpointURL: constants.GRAPHQL_PATH
    }))
    .use(constants.GRAPHQL_PATH, graphqlExpress(req => ({
        schema,
        context: {
            user: req.user
        }
    }))
    );
}