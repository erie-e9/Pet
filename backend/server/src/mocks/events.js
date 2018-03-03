import faker from 'faker';
import Events from '../models/events';

const EVENT_TOTAL = 10;

export default async () => {
    try {
        await Events.remove();
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
            })
        )
    } catch (error) {
        throw error;
    }
}