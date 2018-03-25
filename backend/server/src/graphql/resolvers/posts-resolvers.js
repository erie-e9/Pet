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
    getUserPosts: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Post.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createPost: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Post.create({ ...args, user: user._id });
        } catch (error) {
            throw error;
        }
    },
    updatePost: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            const post = await Post.findOne({ _id, user: user._id });

            if (!post) {
                throw new Error('Post not found...');
            }

            Object.entries(rest).forEach(([key, value]) => {
                post[key] = value;
            });

            return post.save();

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