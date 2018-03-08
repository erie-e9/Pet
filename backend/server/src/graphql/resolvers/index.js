import GraphQLDate from 'graphql-date'
import EventsResolvers from './events-resolvers';
import PagesResolvers from './pages-resolvers';
import PetsResolvers from './pets-resolvers';
import PostsResolvers from './posts-resolvers';
import UsersResolvers from './users-resolvers';

export default {
    Date: GraphQLDate,
    Query: {
        getEvent: EventsResolvers.getEvent,
        getEvents: EventsResolvers.getEvents,

        getPage: PagesResolvers.getPage,
        getPages: PagesResolvers.getPages,

        getPet: PetsResolvers.getPet,
        getPets: PetsResolvers.getPets,

        getPost: PostsResolvers.getPost,
        getPosts: PostsResolvers.getPosts,
        
        getUser: UsersResolvers.getUser,
        getUsers: UsersResolvers.getUsers,
        me: UsersResolvers.me,

    },
    Mutation: {
        createEvent: EventsResolvers.createEvent,
        updateEvent: EventsResolvers.updateEvent,
        deleteEvent: EventsResolvers.deleteEvent,

        createPage: PagesResolvers.createPage,
        updatePage: PagesResolvers.updatePage,
        deletePage: PagesResolvers.deletePage,

        createPet: PetsResolvers.createPet,
        updatePet: PetsResolvers.updatePet,
        deletePet: PetsResolvers.deletePet,

        createPost: PostsResolvers.createPost,
        updatePost: PostsResolvers.updatePost,
        deletePost: PostsResolvers.deletePost,

        createUser: UsersResolvers.createUser,
        updateUser: UsersResolvers.updateUser,
        deleteUser: UsersResolvers.deleteUser,
        loginUser: UsersResolvers.loginUser,
    }
}