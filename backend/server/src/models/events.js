import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const EventSchema = new Schema({
    evname: {
        type: String,
        required: 'Event name is required',
        minlength: [3, 'Event name must be longer that 3 character'],
        maxlength: [100, 'Event name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    evdescription: {
        type: String,
        minlength: [3, 'Event description must be longer that 3 characters'],
        maxlength: [500, 'Event description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    evkeywords: {
        type: String,
        required: 'Event image is required',
    },
    evubication: {
        type: String,
        required: 'Event ubication is required',
    },
    evgeolocation: {
        type: String,
        required: 'Event geolocation is required',
    },
    evdatestart: {
        type: Date,
        required: 'Event date start is required',
        validate: [validators.isDate()]
    },
    evdatefinish: {
        type: Date,
        validate: [validators.isDate()]
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
        required: 'Event video is required',
    },
    evisenabled: {
        type: Boolean,
        required: 'Event isenabled is required',
        default: false
    },
    evregisteredbyuser: {
        type: String,
        required: 'Event registeredbyuser is required'
    },
    evupdatedbyuser: {
        type: String,
    },
    evdeletedbyuser: {
        type: String,
    },
    evdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true })

export default mongoose.model('Event', EventSchema);