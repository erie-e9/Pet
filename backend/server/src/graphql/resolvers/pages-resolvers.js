import Page from '../../models/pages';
import { requireAuth } from '../../services/auth';

export default {
    getPage: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Page.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getPages: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Page.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createPage: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Page.create(args);
        } catch (error) {
            throw error;
        }
    },
    updatePage: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Page.findByIdAndUpdate(_id, rest, {new: true});  
        } catch (error) {
            throw error;
        }
    },
    deletePage: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Page.findByIdAndRemove(_id);
            return {
                message: 'Page deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}