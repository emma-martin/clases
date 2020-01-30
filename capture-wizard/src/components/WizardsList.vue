<template>
  <div class="hello">
    <header>
      <h1>Cath'em all</h1>
      <input type="text" v-model="userquery" @input="searchByName()" />
    </header>
    <ul v-for="(card, index) in filteredCards" :key="index">
      <wizard-card :card="card" @delete-wizard="deleteItem(card, index)" />
    </ul>
  </div>
</template>

<script>
import WizardCard from "./WizardCard.vue";

export default {
  name: "WizardsList",
  components: {
    WizardCard
  },
  computed: {
    filteredCards() {
      let filteredItems = this.searchByName(this.cards, this.userquery);
      return filteredItems;
    }
  },
  data() {
    return {
      cards: [
        {
          name: "Mex",
          isFound: false,
          id: 0,
          price: 20,
          pic:
            'data:image/jpeg;base64,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'
        },
        {
          name: "Arg",
          isFound: false,
          id: 1,
          price: 120,
          pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfCIU1Az76ZTVXm_T7d98ZmRwzUw0MmQPqv4gjthCOKe4Le2_&s"
        },
        {
          name: "Buh",
          isFound: false,
          id: 2,
          price: 12,
          pic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6CxnUca-8CplHPmkm5A0oPNBENJUCVP1cxUhTkRiKp7bvX5H&s"
        }
      ],
      userquery: "",
      results: [],
    };
  },
  methods: {
    searchByName() {
        return this.results = this.cards.filter(card =>
          card.name.toLowerCase()
          .includes(this.userquery.toLowerCase()));
    },

    deleteItem(card, index) {
      if (this.cards[index] === card) {
        this.cards.splice(index, 1);
      }
    }
  },
};
</script>

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

//agregar header, dentro un titulo, input para filtrar por mago
// usar hooks, slots, computed and such
meter loader
si hay resultados, se muetra lista, otherwise, texto