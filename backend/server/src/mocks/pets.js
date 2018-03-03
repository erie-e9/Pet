import faker from 'faker';
import Pet from '../models/pets';

const PET_TOTAL = 10;

export default async () => {
    try {
        await Pet.remove();
        await Array.from({ length: PET_TOTAL }).forEach(
            async() => await Pet.create({
                                    pechipcode: '123QWE456RTY',
                                    pename: faker.internet.userName(),
                                    peage: 7,
                                    peavatar: faker.internet.avatar(),
                                    pegender: 'male',
                                    pespecies: 'dog',
                                    pegroup: 'mammals',
                                    pebirthdate: faker.date.past(),
                                    pecurrentsituation: 'adopted',
                                    pebreed: 'Alaskan Malamute',
                                    pefurcolor: faker.internet.color(),
                                    pesterilized: true,
                                    peneutered: true,
                                    pedewormed: true,
                                    pepedrigree: true,
                                    peprovenance: 'Mexican',
                                    peheight: 0.80,
                                    peweight: 1.3,
                                    pemissing: false,
                                    pereward: false,
                                    pedeceased: false,
                                    pegeolocation: '24.214214,-107.321321',
            })
        )
    } catch (error) {
        throw error;
    }
}