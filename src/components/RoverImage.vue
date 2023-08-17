<script>
import { imageUrl } from '../utils/fetch'
import { mapStores, mapState } from 'pinia'
import { useSolStore } from '../stores/sol'
export default {
    props: {
        camera: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapStores(useSolStore),
        ...mapState(useSolStore, ['sol']),
    },
    data() {
        return {
            imgUrl: "",
        }
    },
    watch: {
        async sol() {
            console.log(this.sol)
            this.imgUrl = await imageUrl(this.sol, this.camera)
        }

    },
    methods: {
    },
}

</script> 

<template>
    <img :src="imgUrl" alt="RoverImg">
</template>