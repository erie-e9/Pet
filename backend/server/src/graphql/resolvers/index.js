import GraphQLDate from 'graphql-date'
import StateResolvers from './state-resolvers';
import UserResolvers from './user-resolvers';
import PageResolvers from './page-resolvers';

export default {
    Date: GraphQLDate,
    Query: {
        getStates: StateResolvers.getStates,
        getState: StateResolvers.getState,
        
        getUsers: UserResolvers.getUsers,
        getUser: UserResolvers.getUser,

        getPages: PageResolvers.getPages,
        getPage: PageResolvers.getPage

    },
    Mutation: {
        createState: StateResolvers.createState,
        updateState: StateResolvers.updateState,
        deleteState: StateResolvers.deleteState,

        createUser: UserResolvers.createUser,
        updateUser: UserResolvers.updateUser,
        deleteUser: UserResolvers.deleteUser,

        createPage: PageResolvers.createPage,
        updatePage: PageResolvers.updatePage,
        deletePage: PageResolvers.deletePage
    }
}