import mongoose, { Schema } from 'mongoose'
//* allergies, medical-treatment
const MedicalRecordSchema = new Schema({
    mrnamedisease: {
        type: String,
        required: 'Medical record requires the name of the disease'
    },
    mrlasttime: {
        type: String,
        required: 'Last time of disease is required'
    },

    
});

export default mongoose.model('MedicalRecord', MedicalRecordSchema);