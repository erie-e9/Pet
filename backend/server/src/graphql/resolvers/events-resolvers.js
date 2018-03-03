import Events from '../../models/events';

export default {
    getEvent: (_, { _id }) => Events.findById(_id),
    getEvents: () => Events.find({}).sort({ createdAt: -1}),
    createEvent: (_, args) => Events.create(args),
    updateEvent: (_, { _id, ...rest }) => Events.findByIdAndUpdate(_id, rest, {new: true}),
    deleteEvent: async (_, { _id }) => {
        try {
            await Events.findByIdAndRemove(_id);
            return {
                message: 'Event deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}