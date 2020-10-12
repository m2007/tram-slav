<template>
  <div>
    <line-chart :chart-data="datacollection" :options="options" v-if="datacollection"></line-chart>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex'
import LineChart from './LineChart.js'

export default Vue.extend({
  name: 'TramChart',
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: mapGetters(['getSplicedStation']),
  mounted () {
    this.fillData()
  },
  watch: {
    getSplicedStation(sts) {
      this.fillData()
    }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.getSplicedStation.map(st => st.name),
        datasets: [
          {
            label: 'Скорость',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * 50)
    }
  }
})
</script>

<style>

</style>