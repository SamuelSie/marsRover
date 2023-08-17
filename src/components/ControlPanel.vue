<script>
import { mapStores, mapActions } from 'pinia'
import { useSolStore } from '../stores/sol'
export default {
    computed: {
        ...mapStores(useSolStore)
    },
    data() {
        return {
            text: "p",
        }
    },
    watch: {
        text() {
            this.updateSol(this.text)
        }
    },
    methods: {
        ...mapActions(useSolStore, ['updateSol']),
    }
}


</script>
<template>
    <input type="text" v-model="text">
    
</template>