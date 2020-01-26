<template>
  <div class="hello">
    <h1>{{ 'Shopping time' }}</h1>
    <section>
      <h2>Shopping Cart Items:</h2>
      <div v-if="cards.length === 0">
        <p>No items to show</p>
      </div>
      <ul v-else>
       <li v-for="(card, index) in cards" :key="index">  
        <diagon-item
          :card="card"
          @increment="onIncrement"
          @decrement="onDecrement"
          @delete="deleteItem(card, index)"
        />
        </li>
      </ul>
      <div>
        <h4>Total:</h4>
        <p>{{`${totalCart} $$$`}}</p>
      </div>
    </section>
    </div>
</template>

<script>
import DiagonItem from './DiagonItem.vue';

export default {
  name: 'DiagonValley',
  components: {
    DiagonItem,
  },
data() {
  return {
    cards:[
      {
        title: 'Book',
        price: 31,
        qty: 1,
        id: 324,
      },
      {
        title: 'Wand',
        price: 240,
        qty: 1,
        id: 229,

      },
      {
        title: 'Hat',
        price: 280,
        qty: 1,
        id: 268,
      },
    ],
  }
},
computed: {
  totalCart(){
    const total = this.cards.reduce((acc, card)=> {
     return acc + card.price*card.qty;
    }, 0);
  return total;    
  },
},
methods:{
    deleteItem(card, index) {
      if(this.cards[index] === card) { 
        this.cards.splice(index, 1)
      }
    },
    onIncrement(card){
      return card.qty++;
    },
      onDecrement(card){
      return card.qty--;
    },
  }
}
</script>
<style scoped lang="scss">
ul{
  list-style: none;
  display: flex;
  justify-content: center;
}

</style>

