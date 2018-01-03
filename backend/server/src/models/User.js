import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
    uusername: {
        type: String,
        required: 'Username is required',
        minlength: [3, 'Username need to be longer'],
    },
    uphone: {
        type: String,
        required: 'Phone is required',
        minlength: [9, 'Phone need to be longer'],
        maxlength: [15, 'Phone is very longer']
    },
    ucellphone: {
        type: String,
        required: 'Cellphone is required',
        minlength: [9, 'Cellphone need to be longer'],
        maxlength: [15, 'Cellphone is very longer']
    },
    uemail: {
        type: String,
        required: 'Email is required',
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'The email is incorrect type of email']
    },
    upassword: {
        type: String,
        required: 'Password is required',
        minlength: [10, 'Password need to be longer'],
        },
    uavatar: {
        type: String,
        required: 'Avatar is required',
    },
    ufirstname: {
        type: String,
        required: 'Firstname is required',
        minlength: [3, 'Firstname need to be longer'],
        maxlength: [15, 'Firstname is very longer']
    },
    ulastname: {
        type: String,
        required: 'Lastname is required',
        minlength: [3, 'Lastname need to be longer'],
        maxlength: [15, 'Lastname is very longer']
    },
    ubirtdate: {
        type: String,
        required: 'Birtdate is required',
    },
    ugender: {
        type: String,
        required: 'Gender is required',
    },
    ucountry: {
        type: String,
        required: 'Country is required',
    },
    ustate: {
        type: String,
        required: 'State is required',
    },
    ucity: {
        type: String,
        required: 'City is required',
    },
    ustreet: {
        type: String,
        required: 'Street is required',
    },
    uzip: {
        type: Number,
        required: 'Zip is required',
        min: [5, 'Zip need to be longer']
    },
    ugeolocation: {
        type: String,
        required: 'Geolocation is required',
    },
    uemailverified: {
        type: String,
        required: 'Emailverified is required',
    },
    uactive: {
        type: String,
        required: 'Active is required',
    },
    uverificationcode: {
        type: String,
        required: 'Verificationcode is required',
    },
    //* Pendientes
    // updatedBy: {type: ObjectId, ref:'users'},
    // updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });


export default mongoose.model('User', UserSchema);