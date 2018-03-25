import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    ptext: {
        type: String,
        maxlength: [1000, 'Post text is very longer']
    },
    pimage: {
        type: String,
        // maxlength: [1000, 'Post image is very longer']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pclaps: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);