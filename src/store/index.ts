import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    from: 0,
    to: 0,
    stations: [{name: 'slavyanka 1'}, {name: 'slavyanka 2'}, {name: 'slavyanka 3'}, {name: 'slavyanka 4'}, {name: 'slavyanka 5'}, {name: 'slavyanka 6'}]
  },
  mutations: {
    reverseStations(state): void {
      state.stations = state.stations.reverse()
    },
    select(state, i): void {
      if (state.to - i <= i - state.from) state.to = i
      else state.from = i
    },
    setTo(state, i): void {
      state.to = i
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getStations(state): {name: string}[] {
      return state.stations
    },
    getSplicedStation(state): {name: string}[] {
      return state.stations.filter((st, i) => i <= state.to && i >= state.from)
    },
    getTo(state): number{
      return state.to
    },
    getFrom(state): number{
      return state.from
    }
  }
})
