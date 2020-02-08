<template>
  <div class="hello">
    <h1>{{ 'Shopping time' }}</h1>
    <section>
    <h2>Shopping Cart Items:</h2>
      <ul v-for="(card, index) in cards" :key="index">
        <diagon-item
        :card="card"
        :index="index"
        @card-index="deleteItem(index)"
        @card-data="addItem(index)"
        />
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
computed: {
  cards(){
    return this.$store.state.cards;
  },
  // que el total sea un getter en elstore
  totalCart(){
    return this.cards.reduce((acc, card)=> {
     return acc + card.price*card.qty;
    }, 0);  
  },
},
methods:{
    deleteItem(index) {
      this.$store.dispatch('deleteItem', index);
    },
    priceCategory(item) {
        return item.qty * item.price;
    },
    onChangeQty(qty){
      return qty;
    },
    addItem(index){
      this.$store.dispatch('addItem', index);
    }
  }
}
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


//todo: crear componente DiagonItem, se le envia el prop de la card,
// el item emite los eventos de increment y decrement qty, 
// mete un boton en cada fila que permite borrar un elemento del carrito
emitiendo el index a eliminar


// fix previous version since i messed updated() {
  <!-- //<template>
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
 </template> -->

// import DiagonItem from './DiagonItem.vue';

// export default {
//   name: 'DiagonValley',
//   components: {
//     DiagonItem,
//   },
// data() {
//   return {
//     cards:[
//       {
//         title: 'Book',
//         price: 31,
//         qty: 1,
//         id: 324,
//       },
//       {
//         title: 'Wand',
//         price: 240,
//         qty: 1,
//         id: 229,

//       },
//       {
//         title: 'Hat',
//         price: 280,
//         qty: 1,
//         id: 268,
//       },
//     ],
//   }
// },
// computed: {
//   totalCart(){
//     const total = this.cards.reduce((acc, card)=> {
//      return acc + card.price*card.qty;
//     }, 0);
//   return total;    
//   },
// },
// methods:{
//     deleteItem(card, index) {
//       if(this.cards[index] === card) { 
//         this.cards.splice(index, 1)
//       }
//     },
//     onIncrement(card){
//       return card.qty++;
//     },
//       onDecrement(card){
//       return card.qty--;
//     },
//   }
// }
