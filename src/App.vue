<template>
  <div id="app" class="row">
    <div class="col-8">
      <map-wrap></map-wrap>
    </div>
    <div class="col-4 config-container">
      <config-wrap></config-wrap>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: {
    MapWrap: () => import('@/views/MapWrap.vue'),
    ConfigWrap: () => import('@/views/ConfigWrap.vue')
  }
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app{
  max-width: 100vw;
  margin: 0;
}
.config-container{
  overflow: auto;
  max-height: 100vh;
}
</style>
