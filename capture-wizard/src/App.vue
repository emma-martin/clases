<template>
  <div id="app">
    <WizardsList/>
  </div>
</template>

<script>
import WizardsList from './components/WizardsList.vue'

export default {
  name: 'app',
  components: {
    WizardsList
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
