<template>
    <button @click="selectHouse">
      De qué casa eres
    </button>
</template>

<script>
export default {
 name: 'AppButton',
  props: {
    houses: {type: Array, default: () => []},
  },
  data() {
    return {
      house: '',
    }
  },
  methods: {
    selectHouse(){
      let randomHouse = this.houses[Math.floor(Math.random()*this.houses.length)];
      this.house = randomHouse;
      this.$emit('onHouse', this.house);
    },
  },
}
</script>
