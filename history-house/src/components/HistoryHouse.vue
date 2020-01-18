<template>
  <div class="hello">
    <select v-model="house_id">
      <option value="5a05e2b252f721a3cf2ea33f" selected>Gryffindor</option>
      <option value="5a05da69d45bd0a11bd5e06f">Ravenclaw</option>
      <option value="5a05dc8cd45bd0a11bd5e071">Slytherin</option>
      <option value="5a05dc58d45bd0a11bd5e070">Hufflepuff</option>
    </select>
    <p class="">{{ `House name: ${houseData.name}`}}</p>
    <p class="">{{ `Mascot: ${houseData.mascot}`}}</p>
    <p class="">{{ `Head: ${houseData.headOfHouse}`}}</p>
  </div>
</template>

<script>
export default {
  name: 'HistoryHouse',
  data() {
    return {
      API_KEY: '$2a$10$5ZwgiFKp4pkJ6VG5M2CYv.MOtJEBRYYk8M2xUNFNW9bD2rkMQhkDS',
      house_id: '5a05e2b252f721a3cf2ea33f',
      houseData: '',
    }
  },
  watch: {
  //  async house_id(){
     // const houseFetched = await this.fetchHouse();
   //   return houseFetched;
 //   }
  house_id: {
   immediate: true,
    handler: 'fetchHouse',
    } 
 },
  methods: {
    fetchHouse(){
      fetch(`https://www.potterapi.com/v1/houses/${this.house_id}?key=${this.API_KEY}`)
      .then(response =>response.json())
      .then(house=> this.houseData = house[0]);
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
</style>


computed: escucha varios valores, retorna un valor
watch: escucha solo un valor, puede hacer logica y modificar varios valores
computed: da valor inicial siempre
watch: necesita propiedad

