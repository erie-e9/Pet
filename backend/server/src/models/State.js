import mongoose, { Schema } from 'mongoose';

const StateSchema = new Schema({
    stext: { 
        type: String,
        required: 'Text is required',
        // maxlength: [250, 'Text is very longer']
    },
}, { timestamps: true });

export default mongoose.model('State', StateSchema);