import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ptext: {
        type: String,
        minlength: [1, 'Post text  must be longer that 1 character'],
        maxlength: [1000, 'Post text is very longer'],
        validate: [validators.isLength(1, 1000)]
    },
    pclaps: {
        type: Number,
        default: 0,
        validate: [validators.isNumeric()]
    },
    pisenabled: {
        type: Boolean,
        required: 'Post isenabled is required',
        default: false
    },
    pregisteredbyuser: {
        type: String,
        required: 'Post registeredbyuser is required'
    },
    pupdatedbyuser: {
        type: String,
    },
    pdeletedbyuser: {
        type: String,
    },
    pdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);