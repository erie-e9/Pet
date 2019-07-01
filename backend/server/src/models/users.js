import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import constants from '../config/constants';

const errorHelper = require('mongoose-error-helper').errorHelper;

const UserSchema = new Schema({
    uusername: {
        type: String,
        required: 'User name is required',
        unique: true,
        minlength: [3, 'User name must be longer that 3 characters'],
    },
    ufirstname: { //! !!!! checar con schema y mocks, también logitud max
        type: String,
        required: 'User firstname is required',
        minlength: [3, 'User firstname must be longer that 3 characters'],
        maxlength: [15, 'User firstname is very longer']
    },
    ulastname: { //! !!!! checar con schema y mocks, también logitud max
        type: String,
        // required: 'User lastname is required',
        minlength: [3, 'User lastname must be longer that 3 characters'],
        maxlength: [15, 'User lastname is very longer']
    },
    uphone: {
        type: String,
        minlength: [9, 'User phone must be longer that 9 characters'],
        maxlength: [30, 'User phone is very longer'],
        validate: {
            validator(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        }
    },
    ucellphone: {
        type: String,
        required: 'User cellphone is required',
        minlength: [9, 'User cellphone must be longer that 9 characters'],
        maxlength: [30, 'User cellphone is very longer'],
        validate: {
            validator(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        }
    },
    uemail: {
        type: String,
        required: 'User email is required',
        unique: true,
        maxlength: [150, 'User email is very longer'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Email is incorrect type of email']
    },
    upassword: {
        type: String,
        required: 'User password is required',
        minlength: [10, 'User password must be longer that 10 characters'],
    },
    uavatar: {
        type: String,
        required: 'User avatar is required',
        minlength: [4, 'User avatar is required'],
    },
    ubirtdate: {
        type: String,
        required: 'User birtdate is required',
    },
    ugender: {
        type: String,
        required: 'User gender is required',
        enum: ['male', 'female']
    },
    ucountry: {
        type: String,
        required: 'User country is required',
        minlength: [3, 'User country must be longer that 3 characters'],
        maxlength: [50, 'User country is very longer']
    },
    ustate: {
        type: String,
        required: 'User state is required',
        minlength: [3, 'User state must be longer that 3 characters'],
        maxlength: [50, 'User state is very longer']
    },
    ucity: {
        type: String,
        required: 'User city is required',
        minlength: [3, 'User city must be longer that 3 characters'],
        maxlength: [50, 'User city is very longer']
    },
    ustreet: {
        type: String,
        required: 'User street is required',
        minlength: [3, 'User street must be longer that 3 characters'],
        maxlength: [50, 'User street is very longer']
    },
    uzip: {
        type: Number,
        required: 'User zip is required'
        // max: [10, 'User zip is very longer']
    },
    ugeolocation: {
        type: String,
        required: 'User geolocation is required',
    },
    uemailverified: {
        type: String,
        required: 'User emailverified is required',
        enum: ['verified', 'waiting']
    },
    uactiveaccount: {
        type: String,
        required: 'User active account is required',
        enum: ['active', 'disabled']
    },
    // uverificationcode: {
    //     type: String,
    //     required: 'User uverificationcode is required',
    //     enum: ['verified', 'waiting']
    // },
    ucurrentoccupation: { //! pendiente longitud
        type: String,
        required: 'User currentoccupation is required'
    },
    uranking: {
        type: Number, //! pediente el tipo de estrellitas
        required: 'User ranking is required',
        // min: [1, 'User only can be evaluated 1 to 10'],
        // max: [10, 'User only can be evaluated 1 to 10'],
    },
    udateadmission: { //! pendiente cambiar a fecha
        type: String,
        required: 'User dateadmission is required'
    },
    ulastlogin: { //! pendiente cambiar a fecha
        type: String,
        required: 'User lastlogin is required'
    },
    //* Pendientes
    // updatedBy: {type: ObjectId, ref:'users'},
    // updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });


UserSchema.pre('save', function(next) {
    if (this.isModified('upassword')) {
        this.upassword = this._hashPassword(this.upassword);
        return next();
    }
    if (err) return errorHelper(err, next);
    return next();
})

UserSchema.methods = {
    _hashPassword(upassword) {
        return hashSync(upassword);
    },
    _authenticate(upassword) {
        return compareSync(upassword, this.upassword);
    },
    _createToken() {
        return jwt.sign({
            _id: this._id
        },
        constants.JWT_SECRET
        )
    }
    
}

// Validations
UserSchema.path('uzip').validate((uzip) => {
    if (uzip.toString().length < 5) {
        throw new Error('User zip must to be 5 characters')
    } 
    return true;
}, 'User zip `{VALUE}` is no valid');

UserSchema.path('uranking').validate((uranking) => {
    if (uranking <= 0) {
        throw new Error('User ranking cannot be 0')
    }
}, 'User ranking `{VALUE}` is no valid');

export default mongoose.model('User', UserSchema);