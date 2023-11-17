const app = Vue.createApp({
    data() {
        return {
            name: 'Cheryl',
            status: -1,
            active: true,
            benefitsSelected: 'yes',
            statusList: [
                'full-time',
                'part-time',
                'contractor'
            ]
        }
    }
});