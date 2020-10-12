<template>
<div class="container">
  <div class="m-ch-wrapper">
    <tram-map></tram-map>
  </div>
  <div class="m-ch-wrapper">
    <tram-chart></tram-chart>
  </div>
</div>
    
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ConfigWrap',
  components: {
    TramMap: () => import('@/components/map/TramMap.vue'),
    TramChart: () => import('@/components/map/TramChart.vue')
  }
});
</script>

<style scoped lang="scss">
.container{
  padding: 10px 0;
}
.m-ch-wrapper{
  width: 100%;
  height: 40vh;
}  

.m-ch-wrapper + .m-ch-wrapper{
  margin-top: 10px;
}  

</style>
