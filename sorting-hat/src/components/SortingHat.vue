<template>
  <div>
    <h1>Casa</h1>
    <app-button 
      :houses="houses"
      @onHouse="assignRandom"
    />
    <p>{{house}}</p>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
 name: 'HistoryHat',
 components: {
   AppButton,
 },
  data() {
    return {
      houses: [
        'Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff',
      ],
      house: '',
    }
  },
  methods: {
    assignRandom(data){
      this.house = data;
    }
  },
}
</script>
