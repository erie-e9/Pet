import Pet from '../../models/pets';

export default {
    getPet: (_, { _id }) => Pet.findById(_id),
    getPets: () => Pet.find({}).sort({createdAt: -1}),
    createPet: (_, args) => Pet.create(args),
    updatePet: (_, { _id, ...rest }) => Pet.findByIdAndUpdate(_id, rest, {new: true}),
    deletePet: async (_, { _id }) => {
        try {
            await Pet.findByIdAndRemove(_id);
            return {
                message: 'Pet deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}