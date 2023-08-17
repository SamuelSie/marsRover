<script>
import { mapStores, mapActions } from 'pinia'
import { useSolStore } from '../stores/sol'
export default {
    computed: {
        ...mapStores(useSolStore)
    },
    data() {
        return {
            text: "1000",
        }
    },
    watch: {
        
    },
    methods: {
        ...mapActions(useSolStore, ['updateSol']),
        baba() {
            this.updateSol(this.text)
            console.log("click")
        }
    }
}


</script>
<template>
    <input type="text" v-model="text">
    <button @click="baba">Enter</button>
</template>