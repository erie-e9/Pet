import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';

const UserSchema = new Schema({
    uusername: {
        type: String,
        required: 'User username is required',
        unique: true,
        minlength: [3, 'User username must to be longer that 3 characters'],
    },
    ufirstname: {
        type: String,
        required: 'User firstname is required',
        minlength: [3, 'User firstname must to be longer that 3 characters'],
        maxlength: [15, 'User firstname too long']
    },
    ulastname: {
        type: String,
        // required: 'User lastname is required',
        minlength: [3, 'User lastname must to be longer that 3 characters'],
        maxlength: [15, 'User lastname too long']
    },
    uphone: {
        type: String,
        minlength: [9, 'User phone must to be longer that 9 characters'],
        maxlength: [15, 'User phone too long']
    },
    ucellphone: {
        type: String,
        required: 'User cellphone is required',
        minlength: [9, 'User cellphone must to be longer that 9 characters'],
        maxlength: [15, 'User cellphone too long']
    },
    uemail: {
        type: String,
        required: 'User email is required',
        unique: true,
        maxlength: [100, 'User email is very longer'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Email is incorrect type of email']
    },
    upassword: {
        type: String,
        required: 'User password is required',
        minlength: [10, 'User password must to be longer that 10 characters'],
    },
    uavatar: {
        type: String,
        required: 'User avatar is required',
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
        minlength: [3, 'User country must to be longer that 3 characters'],
        maxlength: [50, 'User country too long']
    },
    ustate: {
        type: String,
        required: 'User state is required',
        minlength: [3, 'User state must to be longer that 3 characters'],
        maxlength: [50, 'User state too long']
    },
    ucity: {
        type: String,
        required: 'User city is required',
        minlength: [3, 'User city must to be longer that 3 characters'],
        maxlength: [50, 'User city too long']
    },
    ustreet: {
        type: String,
        required: 'User street is required',
        minlength: [3, 'User street must to be longer that 3 characters'],
        maxlength: [50, 'User street too long']
    },
    uzip: {
        type: Number,
        required: 'User zip is required',
        min: [5, 'User zip must to be 5 characters']
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
    ucurrentoccupation: {
        type: String,
        required: 'User currentoccupation is required'
    },
    uranking: {
        type: Number, //! pediente el tipo de estrellitas
        required: 'User ranking is required',
        min: [1, 'User only can be evaluated 1 to 10'],
        max: [10, 'User only can be evaluated 1 to 10']
    },
    udateadmission: {
        type: String,
        required: 'User dateadmission is required'
    },
    ulastlogin: {
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
    return next();
})

UserSchema.methods = {
    _hashPassword(upassword) {
        return hashSync(upassword);
    },
    _authenticate(upassword){
        return compareSync(upassword, this.upassword);
    }
    
}

export default mongoose.model('User', UserSchema);