import Pet from '../../models/pets';
import { requireAuth } from '../../services/auth';

export default {
    getPet: async (_, { _id }, { user }) => {
        try {
            console.log('getPet: el user we XD:', user)
            await requireAuth(user);
            return Pet.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getPets: async (_, args, { user }) => {
        console.log('getPets: el user we XD: ', user)
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
            const pet = await Pet.create({ ...args, user: user._id });
            return pet;
        } catch (error) {
            throw error;
        }
    },
    updatePet: async (_, { _id, ...rest }, { user }) => {
        console.log('XD: ', _id)
        try {
            await requireAuth(user);
            const pet = await Pet.findOne({ _id, user: user._id });
            console.log('pet we: ', pet)
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