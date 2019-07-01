import jwt from 'jsonwebtoken';
import constants from '../config/constants';
import User from '../models/users';

export async function requireAuth(user) {
    // console.log('user we: ', user)
    if (!user || !user._id) {
        throw new Error('Unauthorized');
    } 
    const me = await User.findById(user._id);
    if (!me) {
        throw new Error('Unauthorized or user doesn´t exist');
    }
    return me;
}

export function decodeToken(token) {
    if(token) {
        const arr = token.split(' ');

        if(arr[0] === 'Bearer') {
            return jwt.verify(arr[1], constants.JWT_SECRET);
        }

    }
    throw new Error('Token not valid!');
}