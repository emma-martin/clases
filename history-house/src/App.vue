<template>
  <div id="app">
    <HistoryHouse />
  </div>
</template>

<script>
import HistoryHouse from './components/HistoryHouse.vue'

export default {
  name: 'app',
  components: {
    HistoryHouse
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
