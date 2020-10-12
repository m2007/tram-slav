<template>
  <l-map :zoom="zoom" :center="center" widht>
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
  </l-map>
</template>

<script>
import Vue from 'vue';
import { LMap, LTileLayer } from 'vue2-leaflet';


export default Vue.extend({
  name: 'TramMap',
  components: {
    LMap, LTileLayer
  },
  data: () => ({
    zoom:12,
    center: [59.9392405, 30.3162438],
    url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }),
  methods: {
    updateZoom(zoom){
      this.zoom = zoom
    }
  }
})
</script>

<style>

</style>