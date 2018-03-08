import Post from '../../models/posts';
import { requireAuth } from '../../services/auth';

export default {
    getPost: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Post.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getPosts: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Post.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createPost: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Post.create(args);
        } catch (error) {
            throw error;
        }
    },
    updatePost: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Post.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deletePost: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Post.findByIdAndRemove(_id);
            return {
                message: 'Post deleted success!'
            }
        } catch (error) {
            throw error
        }
    }
}