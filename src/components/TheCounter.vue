<template>
    <h3>{{ finalCounter }}</h3>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    //use mappers to avoid drilling down into the $store
    computed: {
        // counter(){
        // return this.$store.getters.finalCounter;
        // }

        //if using mapGetters use this format
        ...mapGetters('numbers', ['finalCounter'])
    },
}

</script>