<template>
  <div class="container">
    <h1>{{ 'Your mage ID' }}</h1>
<form class="flex form"> 
   <input v-model="wizard.name" placeholder="Add your name">
   <input v-model="wizard.alias" placeholder="What is your alias?">
   <input v-model="wizard.role" placeholder="What do you do?">
   <input v-model="wizard.house" placeholder="Tell me your house">
   <input v-model="wizard.wand" placeholder="Show off your wand">
   </form>
   <section class="card flex">
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

<style scoped lang="scss">

.container{
  margin: auto;
 
}
.form{
  margin: 40px auto;
  width: 300px;
}
.flex{
  display: flex;
  flex-direction: column;
}

.card{
  padding: 110px 130px;
  border: 1px solid black;
  max-width: fit-content;
  min-width: 300px;
  margin: auto;
  background: url("https://vignette.wikia.nocookie.net/harrypotter/images/4/46/Ministry_of_magic_logo.png") top center no-repeat blanchedalmond;
  background-size: 150px;
  align-items: flex-start;
}
</style>
