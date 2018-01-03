import mongoose from 'mongoose';
import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

try {
    mongoose.connect(constants.DB_URL)
} catch (error) {
    mongoose.createConnection(constants.DB_URL)
}

mongoose.connection
    .once('open', () => console.log('Connection has been established to MongoDB database successfully.'))
    .on('error', console.error.bind(console, '~Error connecting to MongoLab'))