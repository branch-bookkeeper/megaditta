import Document from './src/components/Document';

export default {
    getSiteData: () => ({
        title: 'Branch Bookkeeper',
    }),

    getRoutes: async () => [
        {
            path: '/',
            component: 'src/containers/Home',
        },
        {
            is404: true,
            component: 'src/containers/404',
        },
    ],

    devServer: {
        proxy: {
            '/.netlify/functions': 'http://0.0.0.0:9000',
        },
    },

    Document,
};
