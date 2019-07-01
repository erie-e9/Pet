import User from '../../models/users';
import { requireAuth } from '../../services/auth';
import { UserInputError, ApolloError, AuthenticationError } from 'apollo-server-express';

export default {
    getUser: async (_, { _id }, { user }) => {
        if (!user) { 
            throw new AuthenticationError('Not authenticated');
        }
        try {
            await requireAuth(user);
            return User.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getUsers: async (_, args, { user }) => {
        if (!user) { 
            throw new AuthenticationError('Not authenticated');
        }
        try {
            await requireAuth(user);
            return User.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createUser: async (_, args, context, info) => { // sign up
      try {
        let user = await User.create(args);
        return {
            token: user._createToken() 
        }
      } catch (error) {
        if (args.uphone !== 'expected') {
            throw new UserInputError('Form Arguments invalid', error, {
              errores: Object.keys(args),
            });
          }
        // throw new ApolloError('error al crear ', 503);
      }
    },
    updateUser: async (_, { _id, ...rest }, { user }) => {
        if (!user) { 
            throw new AuthenticationError('Not authenticated');
        }
        try {
            await requireAuth(user);
            return User.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteUser: async (_, { _id }, { user }) => {
        if (!user) { 
            throw new AuthenticationError(' ');
        }
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
                if (uemail === "" || uemail === null) {
                    throw new UserInputError('User email is required', {
                        uemail: 'User email is required'
                    });
                }
                if (!user) {
                    throw new UserInputError(`Email ${uemail} is incorrect, maybe you want to sign up`,{
                        uemail: `Email ${uemail} is incorrect, maybe you want to sign up`
                    })
                // throw new ApolloError('error al crear ', 503);
                }
                if (!user._authenticate(upassword)) {
                    throw new UserInputError('User password not match', {
                        upassword: `User password not match`
                    });
                }

                return {
                    token: user._createToken()
                };
            } catch (error) {
                throw error;
            }
    },
    me: async (_, args, { user }) => {
        if (!user) { 
            throw new AuthenticationError('Not authenticated');
        }
        try {
            const me = await requireAuth(user);
            return me;
        } catch (error) {
            throw error;
        }
    }
}