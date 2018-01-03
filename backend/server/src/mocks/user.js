import faker from 'faker';
import User from '../models/User';

const TOTAL_USER = 10;

export default async () => {
    try {
        await User.remove();
        await Array.from({ length: TOTAL_USER }).forEach(
            async () => await User.create({ uusername: faker.internet.userName(),
                                            uphone: faker.phone.phoneNumberFormat(),
                                            ucellphone: faker.phone.phoneNumberFormat(),
                                            uemail: faker.internet.email(),
                                            upassword: faker.internet.password(),
                                            uavatar: faker.internet.avatar(),
                                            ufirstname: faker.name.firstName(),
                                            ulastname: faker.name.lastName(),
                                            ubirtdate: faker.date.past(),
                                            ugender: 'male',
                                            ucountry: faker.address.country(),
                                            ustate: faker.address.state(),
                                            ucity: faker.address.city(),
                                            ustreet: faker.address.streetName(),
                                            uzip: 34000,
                                            ugeolocation: '24.214214,-107.321321',
                                            uemailverified: 'true',
                                            uactive: 'active',
                                            uverificationcode: 'verified'})
        )
    } catch (error) {
        throw error;
    }
}