<template>
  <b-card title="Список остановок">
    <b-button class="mb-2" @click="reverseStations()">Прямо/обратно</b-button>
    <b-list-group>
      <b-list-group-item 
      v-for="(station, index) of getStations" 
      :key="index" 
      @click="select(index)"
      :class="{'active': (index >= getFrom && index <= getTo)}"
      >

      <div class="d-flex w-100 justify-content-between">
        <p class="mb-1">{{station.name}}</p>
        <small v-if="index == getFrom">От куда</small>
      <small v-if="index == getTo">Куда</small>
      </div>
      
      </b-list-group-item>
    </b-list-group>
    <b-button class="mt-2" variant="success">Построить график</b-button>
  </b-card>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex'
export default Vue.extend({
  name: 'TramStations',
  data: () => ({
    tick: true
  }),
  computed: {
    ...mapGetters(['getTo', 'getFrom', 'getStations'])
  },
  mounted() {
    this.setTo(this.getStations.length - 1)
  },
  methods: {
    ...mapMutations(['setTo', 'select', 'reverseStations'])
  }
})
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
</style>