import faker from 'faker';
import Page from '../models/pages';

const TOTAL_PAGE = 10;

export default async () => {
    try {
        await Page.remove();
        await Array.from({ length: TOTAL_PAGE}).forEach(
            async () => await Page.create({ 
                                pname: faker.company.companyName(),
                                pimage: faker.image.business(),
                                pdescription: faker.lorem.paragraphs(1),
                                pstartdate: faker.date.past(),
                                ptype: 'place',
                                purl: faker.internet.url(),
                                pcategory: 'business',
                                pphone: faker.phone.phoneNumberFormat(),
                                pcellphone: faker.phone.phoneNumberFormat(),
                                pemail: faker.internet.email(),
                                pworkinghours: '8am - 4pm',
                                pcountry: faker.address.country(),
                                pstate: faker.address.state(),
                                pcity: faker.address.city(),
                                pstreet: faker.address.streetName(),
                                pzip: 34000,
                                pgeolocation: '24.214214,-107.321321', 
                            })
        )
    } catch (error) {
        throw error;
    }
}