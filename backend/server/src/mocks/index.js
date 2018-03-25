import faker from 'faker';
import Events from '../models/events';
import Pages from '../models/pages';
import Pet from '../models/pets';
import Post from '../models/posts';
import User from '../models/users';

const EVENT_TOTAL = 3;
const PAGE_TOTAL = 3;
const PET_TOTAL = 3;
const POST_TOTAL = 3;
const USER_TOTAL = 2;

export default async () => {
    try {
        await Events.remove();
        await Pages.remove();
        await Pet.remove();
        await Post.remove();
        await User.remove();

        await Array.from({ length: USER_TOTAL }).forEach(
            async (_, i) => {
                const user = await User.create({
                    uusername: faker.internet.userName(),
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
                    uemailverified: 'verified',
                    uactiveaccount: 'active',
                    // uverificationcode: 'verified'
                    ucurrentoccupation: 'student',
                    uranking: 1,
                    udateadmission: faker.date.past(),
                    ulastlogin: faker.date.recent(),
                });
                
                await Array.from({ length: EVENT_TOTAL }).forEach(
                    async () => await Events.create({
                                        evname: faker.internet.userName(),
                                        evdescription: 'Voluptas rerum ullam quia optio. Et rem iusto. Officiis velit dicta fugiat nam. Velit quas est dolor.',
                                        evkeywords: 'EVENTKEYWORDS',
                                        evubication: 'EVENTUBICATION',
                                        evgeolocation: '24.214214,-107.321321',
                                        evdatestart: faker.date.future(),
                                        evdatefinish: faker.date.future(),
                                        evtype: 'public',
                                        evimage: faker.internet.url(),
                                        evvideo: faker.internet.url(),
                                        user: user._id
                    })
                )
                
                await Array.from({ length: PAGE_TOTAL }).forEach(
                    async () => await Pages.create({ 
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
                                        user: user._id 
                    })
                )

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
                                            peheight: 10,
                                            peweight: 13,
                                            pemissing: false,
                                            pereward: false,
                                            pedeceased: false,
                                            pegeolocation: '24.214214,-107.321321',
                                            user: user._id
                    })
                )

                await Array.from({ length: POST_TOTAL }).forEach(
                    async () => await Post.create({ 
                                        ptext: faker.lorem.paragraphs(1),
                                        pimage: faker.internet.avatar(),
                                        user: user._id
                    })
                )
                
            }
        )

    } catch (error) {
        throw error;
    }
}