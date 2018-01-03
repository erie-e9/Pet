import mongoose, { Schema } from 'mongoose';

const PageSchema = new Schema({
    pname: {
        type: String,
        required: 'Name is required',
        minlength: [3, 'Username need to be longer']
    },
    pimage: {
        type: String,
        required: 'Image is required',
    },
    pdescription: {
        type: String,
        required: 'Description is required',
        maxlength: [500, 'Description is very longer']
    },
    pstartdate: {
        type: String,
        required: 'Start date is required',
    },
    purl: {
        type: String,
        required: 'Url is required',
        minlength: [9, 'URL need to be longer'],
        maxlength: [250, 'URL is very longer']
    },
    pcategory: {
        type: String,
        required: 'Category is required'
    },
    pphone: {
        type: String,
        required: 'Phone is required',
        minlength: [9, 'Phone need to be longer'],
        maxlength: [15, 'Phone is very longer']
    },
    pcellphone: {
        type: String,
        required: 'Cellphone is required',
        minlength: [9, 'Cellphone need to be longer'],
        maxlength: [15, 'Cellphone is very longer']
    },
    pemail: {
        type: String,
        required: 'Email is required',
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'The email is incorrect type of email']
    },
    pworkinghours: {
        type: String,
        required: 'Working hours are required',
    },
    pcountry: {
        type: String,
        required: 'Country is required',
    },
    pstate: {
        type: String,
        required: 'State is required',
    },
    pcity: {
        type: String,
        required: 'City is required',
    },
    pstreet: {
        type: String,
        required: 'Street is required',
    },
    pzip: {
        type: Number,
        required: 'Zip is required',
        min: [5, 'Zip need to be longer']
    },
    pgeolocation: {
        type: String,
        required: 'Geolocation is required',
    },
    // branchoffice: {
    //     [array]
    // }
});

export default mongoose.model('Page', PageSchema);