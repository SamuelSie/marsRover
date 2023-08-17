<script>
import RoverImage from "../components/RoverImage.vue"
import ControlPanel from "../components/ControlPanel.vue"
export default {
  components: {
    RoverImage,
    ControlPanel,
  },
  methods: {
    
  },
  async mounted() {
  }

}
</script>

<template>
  <div class="container">
  <header>
    <ControlPanel />
  </header>
  <main class="row">
    <RoverImage class="col" camera="fhaz"/>
    <RoverImage class="col" camera="rhaz"/>
    <RoverImage class="col" camera="mast"/>
  </main>  
</div>
</template>

<style>

.img-wrap {
  display: flex;
  flex-direction: row;
  width: 100%
}
.item {
  flex: auto;
}
</style>