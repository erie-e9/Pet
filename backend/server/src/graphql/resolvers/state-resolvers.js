import State from '../../models/State';

export default {
    getStates: () => State.find({}).sort({ createdAt: -1 }),
    getState: (_, { _id }) => State.findById(_id),
    createState: (_, args) => State.create(args),
    updateState: (_, { _id, ...rest }) => State.findByIdAndUpdate(_id, rest, { new: true }),
    deleteState: async (_, { _id }) => {
        try {
            await State.findByIdAndRemove(_id);
            return {
                message: 'State deleted success!'
            }
        } catch (error) {
            throw error
        }
    }
}