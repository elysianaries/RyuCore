// 避免影响全局，方法名以大写M开头，后面命名以正常驼峰形式

export default {
    methods: {
        async Mjsonp(url, param = {}) {
            const response = await this.$http.jsonp(url, {params: param})
            .catch(e => {
                console.log(e)
                return e
            })
            return response
        },
        async MjsonpNew(url, param = {}) {
            const response = await this.$http.jsonp(url, param)
            .catch(e => {
                console.log(e)
                return e
            })
            return response
        },
        async Mget(url, param) {
            const response = await this.$http.get(url, param, { emulateJSON: true })
            .catch(e => {
                console.log(e)
                return e
            })
            return response
        },
        async Mpost(url, param) {
            const response = await this.$http.post(url, param, { emulateJSON: true })
            .catch(e => {
                console.log(e)
                return e
            })
            return response
        },
        MrouterJump(to, pra_obj) {
            if (this.$router) {
                this.$router.push({name: to, params: pra_obj})
            }
        },
        MrouterGoBack() {
            this.$router.go(-1)
        }
    }
}
