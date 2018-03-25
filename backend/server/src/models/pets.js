import mongoose, { Schema } from 'mongoose';
// * vaccinations, diseases, surgeries, treatment, datebroughtin, dateofexit
const PetSchema = new Schema({
    pechipcode: {
        type: String,
        required: 'Pet chip code is required',
        // unique: true, //! pendiente descomentar
        //! pendiente ancho minimo y maximo
    },
    pename: {
        type: String,
        required: 'Pet name is required',
        minlength: [1, 'Pet name must be longer that 1 character'],
        maxlength: [50, 'Pet name']
    },
    peage: {
        type: Number,
        required: 'Pet age is required',
    },
    peavatar: {
        type: String,
        required: 'Pet avatar is required'
    },
    pegender: {
        type: String,
        required: 'Pet gender is required',
        enum: ['male', 'female']
    },
    pespecies: {
        type: String,
        required: 'Pet species is required',
    },
    pegroup: {
        type: String,
        required: 'Pet group is required',
        enum: ['mammals', 'birds', 'fish', 'reptiles', 'amphibians', 'arachnids', 'insects']
    },
    pebirthdate: {
        type: String,
        required: 'Pet birthdate is required'
    },
    pecurrentsituation: {
        type: String,
        required: 'Pet current situation is required',
        enum: ['stray', 'adopted', 'adopt', 'sale']
    },
    pebreed: {
        type: String,
        required: 'Pet breed is required',
    },
    pefurcolor: {
        type: String,
        required: 'Pet furcolor is required'
    },
    pesterilized: {
        type: Boolean,
        required: 'Pet sterilized is required'
    },
    peneutered: {
        type: Boolean,
        required: 'Pet gender is required',
    },
    pedewormed: { //! pendiente saber si es general
        type: Boolean,
        required: 'Pet dewormed is required'
    },
    pepedrigree: { //! pendiente saber si es general
        type: Boolean,
        required: 'Pet pedigree is required'
    },
    peprovenance: {
        type: String,
        required: 'Pet provenance is required'
    },
    peheight: {
        type: Number,
        required: 'Pet height is required'
    },
    peweight: {
        type: Number,
        required: 'Pet weight is required'
    },
    pemissing: {
        type: Boolean,
        required: 'Pet missing is required'
    },
    pereward: { //! pendiente saber si es apropiado ponerlo: Recompensa
        type: Boolean,
    },
    pedeceased: {
        type: Boolean,
        required: 'Pet deceased is required'
    },
    pegeolocation: {
        type: String,
        required: 'Pet geolocation is required'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

export default mongoose.model('Pet', PetSchema);