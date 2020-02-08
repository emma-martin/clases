<template>
  <div class="hello">
    <!-- <select v-model="house_id" >
      <option value="5a05e2b252f721a3cf2ea33f" selected>Gryffindor</option>
      <option value="5a05da69d45bd0a11bd5e06f">Ravenclaw</option>
      <option value="5a05dc8cd45bd0a11bd5e071">Slytherin</option>
      <option value="5a05dc58d45bd0a11bd5e070">Hufflepuff</option>
    </select> -->

    <!-- <div v-if="isLoading" class="loader">
      Loading...
    </div> -->
    <div v-for="(character, index) in characters" :key="index">
      <TheCard :character="character"/>
    </div>
  </div>
</template>

<script>
import TheCard from './TheCard.vue';


export default {
  name: 'TheList',
  components: {
    TheCard,
        
  },
  data() {
    return {
      API_KEY: '$2a$10$5ZwgiFKp4pkJ6VG5M2CYv.MOtJEBRYYk8M2xUNFNW9bD2rkMQhkDS',
      // house_id: '5a05e2b252f721a3cf2ea33f',
      characters: {},
      isLoading: false,
    }
  },
  created(){
    this.fetchCharacters();
  },
  mounted(){
      this.isLoading = true;
  },
//   watch: {
//     house_id(val) {
//       this.fetchCharacters(val);
//     } 
//  },
  methods: {
    async fetchCharacters(){
      this.isLoading = true;
     await fetch(`https://www.potterapi.com/v1/characters/?key=${this.API_KEY}`)
      .then(response =>response.json())
      .then(characters=> this.characters = characters);
      this.isLoading = false;
    },
  },
}
</script>
<style scoped lang="scss">

ul{
  list-style: none;
}

.loader {

  background: repeating-linear-gradient(135deg, DarkGoldenrod, DarkGoldenrod .45em, #ff2400 0, #ff2400 .55em);
  color: #786254;
  font-size: 20px;
  margin: 100px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: loader 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes loader {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>


computed: escucha varios valores, retorna un valor
watch: escucha solo un valor, puede hacer logica y modificar varios valores
computed: da valor inicial siempre
watch: necesita propiedad
pending:arreglar loader

