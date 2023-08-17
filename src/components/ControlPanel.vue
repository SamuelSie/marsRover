<script>
import { mapStores, mapActions } from 'pinia'
import { useSolStore } from '../stores/sol'
export default {
    computed: {
        ...mapStores(useSolStore)
    },
    data() {
        return {
            solInput: "1144"
        }
    },
    watch: {
        solInput(){
            this.delayLoad()
        }
    },
    methods: {
        ...mapActions(useSolStore, ['updateSol']),
        delayLoad() {
            setTimeout(() => {
                this.updateSol(this.solInput)
            }, 500)
        },
    },
    mounted() {
        this.updateSol(this.solInput)
    }
}


</script>
<template>
    <div> 
        <p>{{ solInput }}</p>
        <label for="customRange3" class="form-label">Sol</label>
        <input type="range" class="form-range slajder" min="0" max="3920" id="customRange3" v-model="solInput">
    </div>
</template>

<style>
.slajder {
    width: 100%;
    }
</style>