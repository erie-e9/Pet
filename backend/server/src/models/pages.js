import mongoose, { Schema } from 'mongoose';

const PageSchema = new Schema({
    pname: {
        type: String,
        // unique: true, //! pendiente descomentar
        required: 'Page name is required',
        minlength: [3, 'Page username must be longer that 3 characters']
    },
    pimage: {
        type: String,
        required: 'Page image is required',
    },
    pdescription: {
        type: String,
        required: 'Page description is required',
        maxlength: [500, 'Page description is very longer']
    },
    pstartdate: {
        type: String,
        required: 'Page start date is required',
    },
    ptype: {
        type: String,
        required: 'Page type is required',
        enum: ['place', 'business', 'institution', 'organization', 'products']
    },
    purl: {
        type: String,
        minlength: [3, 'Page URL must be longer that 3 characters'],
        maxlength: [250, 'Page URL is very longer']
    },
    pcategory: { //! pendiente checar categorías
        type: String,
        required: 'Page category is required'
    },
    pphone: {
        type: String,
        required: 'Page phone is required',
        minlength: [9, 'Page phone must be longer that 9 characters'],
        maxlength: [15, 'Page phone is very longer']
    },
    pcellphone: {
        type: String,
        minlength: [9, 'Page cellphone must be longer that 9 characters'],
        maxlength: [15, 'Page cellphone is very longer']
    },
    pemail: {
        type: String,
        required: 'Page email is required',
        // unique: true, //! pendiente descomentar
        maxlength: [100, 'Employee email is very longer'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Page email is incorrect type of email']
    },
    pworkinghours: {
        type: String,
        // required: 'Page working hours are required',
    },
    pcountry: {
        type: String,
        // required: 'Page country is required',
        minlength: [3, 'Page country must to be longer that 3 characters'],
        maxlength: [50, 'Page country too long']
    },
    pstate: {
        type: String,
        // required: 'Page state is required',
        minlength: [3, 'Page state must to be longer that 3 characters'],
        maxlength: [50, 'Page state too long']
    },
    pcity: {
        type: String,
        // required: 'Page city is required',
        minlength: [3, 'Page city must to be longer that 3 characters'],
        maxlength: [50, 'Page city too long']
    },
    pstreet: {
        type: String,
        // required: 'Page street is required',
        minlength: [3, 'Page street must to be longer that 3 characters'],
        maxlength: [50, 'Page street too long']
    },
    pzip: {
        type: Number,
        // required: 'Page zip is required',
        min: [5, 'Page zip need to be longer']
    },
    pgeolocation: {
        type: String,
        required: 'Page geolocation is required',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    // branchoffice: {
    //     [array]
    // }
}, { timestamps: true });

export default mongoose.model('Page', PageSchema);