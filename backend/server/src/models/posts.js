import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    ptext: {
        type: String,
        // maxlength: [1000, 'Post text is very longer']
    },
    pimage: {
        type: String,
        // maxlength: [1000, 'Post image is very longer']
    }
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);