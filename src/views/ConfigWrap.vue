<template>
  <div class="container">
    <tram-config></tram-config>
    <tram-stations></tram-stations>
    <tram-info></tram-info>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ConfigWrap',
  components: {
    TramConfig: () => import('@/components/config/TramConfig.vue'),
    TramStations: () => import('@/components/config/TramStations.vue'),
    TramInfo: () => import('@/components/config/TramInfo.vue')
  },
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.container{
  margin: 0;
  padding: 0;
}
.container > div{
  margin-top: 10px;
}
</style>
