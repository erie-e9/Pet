import faker from 'faker';
import State from '../models/State';

const TOTAL_STATE = 10;

export default async () => {
    try {
        await State.remove();
        await Array.from({ length: TOTAL_STATE }).forEach(
            async () => await State.create({ stext: faker.lorem.paragraphs(1)})
        )
    } catch (error) {
        throw error;
    }
}