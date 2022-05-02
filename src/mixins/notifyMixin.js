export default {
    methods: {
        notice() {
            const h = this.$createElement
            this.$notify({
                title: '其实',
                message: h('i', { style: 'color: teal' }, '其实我还没有实现')
            })
        }
    },
}