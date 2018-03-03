import faker from 'faker';
import Post from '../models/posts';

const POST_TOTAL = 10;

export default async () => {
    try {
        await Post.remove();
        await Array.from({ length: POST_TOTAL }).forEach(
            async () => await Post.create({ 
                                ptext: faker.lorem.paragraphs(1),
                                pimage: faker.internet.avatar()
            })
        )
    } catch (error) {
        throw error;
    }
}