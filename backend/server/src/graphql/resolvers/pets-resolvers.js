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
    getUserPets: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Pet.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createPet: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Pet.create({ ...args, user: user._id });
        } catch (error) {
            throw error;
        }
    },
    updatePet: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            const pet = await Pet.findOne({ _id, user: user._id });

            if (!pet) {
                throw new Error('Pet not found...');
            }

            Object.entries(rest).forEach(([key, value]) => {
                pet[key] = value;
            });

            return pet.save();

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