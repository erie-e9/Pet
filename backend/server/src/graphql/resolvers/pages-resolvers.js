import Page from '../../models/pages';

export default {
    getPage: (_, { _id }) => Page.findById(_id),
    getPages: () => Page.find({}).sort({ createdAt: -1 }),
    createPage: (_, args) => Page.create(args),
    updatePage: (_, { _id, ...rest }) => Page.findByIdAndUpdate(_id, rest, {new: true}),
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