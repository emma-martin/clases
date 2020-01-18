<template>
  <div class="hello">
    <h1>{{ 'Your mage ID' }}</h1>
<form class="flex card"> 
   <input v-model="wizard.name" placeholder="Add your name">
   <input v-model="wizard.alias" placeholder="What is your alias?">
   <input v-model="wizard.role" placeholder="What do you do?">
   <input v-model="wizard.house" placeholder="Tell me your house">
   <input v-model="wizard.wand" placeholder="Show off your wand">
   </form>
   <section class="flex">
    <p>Name: {{ wizard.name }}</p>
    <p>Alias: {{ wizard.alias }}</p>
    <p>Role: {{ wizard.role }}</p>
    <p>House: {{ wizard.house }}</p>
    <p>Wand: {{ wizard.wand }}</p>
</section>
  </div>
</template>

<script>
export default {
  name: 'WizardCard',
  data(){
    return {
      wizard: {
        name: '',
        alias: '',
        role: '',
        house: '',
        wand: '',
      }

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card{
      width: 300px;
}
.flex{
  display: flex;
  flex-direction: column;
}
</style>
