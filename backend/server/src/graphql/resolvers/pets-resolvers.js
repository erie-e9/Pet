import Pet from '../../models/pets';
import { requireAuth } from '../../services/auth';

export default {
    getPet: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Pet.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getPets: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Pet.find({}).sort({createdAt: -1});
        } catch (error) {
            throw error;
        }
    },
    createPet: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Pet.create(args);
        } catch (error) {
            throw error;
        }
    },
    updatePet: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Pet.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deletePet: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Pet.findByIdAndRemove(_id);
            return {
                message: 'Pet deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}