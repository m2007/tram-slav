<template>
  <b-card title="Параметры трамвая">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
        <b-form-group
          id="input-group-1"
          label="Ускорение трамвая"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.acceleration"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-2"
          label="Макс. скорость"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.maxSpeed"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-3"
          label="Замедление"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="form.deceleration"
            required
          ></b-form-input>
        </b-form-group>

        <div class="d-flex justify-content-between">
          
        <b-button type="submit" variant="primary" class="mr-1">Сохранить</b-button>
        <b-button type="reset" variant="danger">Сбросить</b-button>
        </div>
      </b-form>
    </b-card>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'TramConfig',
  data: () => ({
    form: {
      acceleration: '',
      maxSpeed: '',
      deceleration: ''
    },
    show: true
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault()
      // post
    },
    onReset(e) {
      e.preventDefault()
      this.form.acceleration = ''
      this.form.maxSpeed = ''
      this.form.deceleration = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
})
</script>

<style >

</style>