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
};
