import Events from '../../models/events';
import { requireAuth } from '../../services/auth';

export default {
    getEvent: async (_, { _id }, { user }) => {
        try {
         await requireAuth(user);
         return Events.findById(_id);   
        } catch (error) {
            throw error;
        }
    },
    getEvents: async (_, args, { user }) => {
        try {
         await requireAuth(user);
         return Events.find({}).sort({ createdAt: -1});   
        } catch (error) {
            throw error;
        }
    },
    createEvent: async (_, args, { user }) => {
        try {
         await requireAuth(user);
         return Events.create(args);   
        } catch (error) {
            throw error;
        }
    },
    updateEvent: async (_, { _id, ...rest }, { user }) => {
        try {
         await requireAuth(user);
         return Events.findByIdAndUpdate(_id, rest, {new: true});   
        } catch (error) {
            throw error;
        }
    },
    deleteEvent: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Events.findByIdAndRemove(_id);
            return {
                message: 'Event deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}