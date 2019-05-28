import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
    evname: {
        type: String,
        required: 'Event name is required',
        minlength: [1, 'Event name must be longer that 1 character'],
        maxlength: [100, 'Event name is very longer']
    },
    evdescription: {
        type: String,
        minlength: [1, 'Event description must be longer that 1 character'],
        maxlength: [500, 'Event description is very longer']
    },
    evkeywords: {
        type: String,
        required: 'Event image is required',
    },
    evubication: { //! pendiente saber si se cambiar por address
        type: String,
        required: 'Event ubication is required',
    },
    evgeolocation: {
        type: String,
        required: 'Event geolocation is required',
    },
    evdatestart: {
        type: String,
        required: 'Event date start is required',
    },
    evdatefinish: {
        type: String,
    },
    evtype: {
        type: String,
        required: 'Event type is required',
        enum: ['public', 'private', 'protected']
    },
    // organizer: User/Page
    evimage: {
        type: String,
        required: 'Event image is required',
    },
    evvideo: {
        type: String,
        // required: 'Event video is required',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

export default mongoose.model('Event', EventSchema);