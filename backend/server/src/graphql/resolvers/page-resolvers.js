import Page from '../../models/Page';

export default {
    getPages: () => Page.find({}).sort({ createdAt: -1 }),
    getPage: (_, { _id }) => Page.findById(_id),
    createPage: (_, args) => Page.create(args),
    updatePage: (_, { _id, ...rest }) => Page.findByIdAndUpdate(_id, rest, { new: true }),
    deletePage: async (_, { _id }) => {
        try {
            await Page.findByIdAndRemove(_id);
            return {
                message: 'Page deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}