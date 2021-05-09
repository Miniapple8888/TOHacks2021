<template>
  <div class="about">
    <h1>About Us</h1>
    <div class="map-container">
      <Map />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Map from '../components/Map';

export default defineComponent({
  setup() {
  },
  components: {
    Map
  }
})
</script>

<style scoped>
.map-containter {
  margin: 0 auto;
  outline: 1px solid red;
  width: 400px;
  height: 300px;
}
</style>