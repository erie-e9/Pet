/* eslint-disable */
import bodyParser from 'body-parser';
import { decodeToken } from '../services/auth';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import resolvers from '../graphql/resolvers';
import typeDefs from '../graphql/schema';
import { makeExecutableSchema } from 'graphql-tools';
import { formatError } from 'apollo-errors';

const cors = require('cors');

const schema = makeExecutableSchema({
    typeDefs, resolvers
})

const getMe = async req => {
    const token = req.headers.authorization;
  
    if (token != null) {
      try {
        return await decodeToken(token)
      } catch (e) {
        throw new AuthenticationError(
          'Unauthorized: Your session expired. Sign in again. Error: ', e
        );
      }
    }
};

export default app => {
    app
    .use(cors({
      credentials: true,
      origin: "http://localhost:3000"
    }))
    .use(bodyParser.json())
    const server = new ApolloServer({
        schema,
        formatError: (err) => {
          // Don't give the specific errors to the client.
          if (err.message.startsWith("Database Error: ")) {
            return new Error('Internal server error');
          }
          
          // Otherwise return the original error.  The error can also
          // be manipulated in other ways, so long as it's returned.
          return err;
        },
        engine: {
          rewriteError(err) {
            // Return `null` to avoid reporting `AuthenticationError`s
            if (err instanceof AuthenticationError) {
              return null;
            }
            // All other errors will be reported.
            return err;
          }
        },
        context: async ({ req }) => {
            const user = await getMe(req);
        return {
            user,
            secret: process.env.SECRET,
        }}
    });
    server.applyMiddleware({ app });
}