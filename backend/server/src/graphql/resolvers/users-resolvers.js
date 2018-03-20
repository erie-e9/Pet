import User from '../../models/users';
import { requireAuth } from '../../services/auth';

export default {
    getUser: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return User.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getUsers: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return User.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createUser: async (_, args) => { // sign up
      try {
        let user = await User.create(args);
        return {
            token: user._createToken() 
        }
      } catch (error) {
          throw error;
      }
    },
    updateUser: async (_, { _id, ...rest}, { user }) => {
        try {
            await requireAuth(user);
            return User.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteUser: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await User.findByIdAndRemove(_id);
            return {
                message: 'User deleted success!'
            }
        } catch (error) {
            throw error
        }
    },
    loginUser: async (_, { uemail, upassword }) => {
        try {
            let user = await User.findOne({ uemail });

            if (!user) {
                throw new Error('User not exist');
            }
            if (!user._authenticate(upassword)) {
                throw new Error('User password not match');
            }

            return {
                token: user._createToken
            };
        } catch (error) {
            throw error;
        }
    },
    me: async (_, args, { user }) => {
        try {
            const me = await requireAuth(user);
            return me;
        } catch (error) {
            throw error;
        }
    }
}