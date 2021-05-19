<template>
<button @click="login" v-if="!isAuth">Login</button>
<button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
export default {
    methods: {
        login(){
            this.$store.dispath('login')
        },
        logout(){
            this.$store.dispath('logout')
        },
    },
    computed: {
        isAuth(){
            return this.$store.getters.userIsAuthenticated
        }
    }
}
</script>