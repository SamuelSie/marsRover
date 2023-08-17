<script>
import { imageUrl } from '../utils/fetch';
export default {
    data() {
        return {
            imgUrl: "",
        }
    },
    async mounted() {
        this.imgUrl = await imageUrl()
    }
}

</script> 

<template>
    <img :src="imgUrl" alt="RoverImg">
</template>