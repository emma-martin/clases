<template>
  <div class="hello">
    <h1>{{ 'Shopping time' }}</h1>
    <section>
    <h2>Shopping Cart Items:</h2>
      <ul>
        <li :v-for="(card, index) in cards" :key="index">
          <h3>{{card.title}}</h3>
          <label for="price">Price:</label>
          <input v-model="card.price" placeholder="price per wand" type="number" id="price" name="price">
          <label for="qty">Quantity:</label>
          <input v-model="card.qty" placeholder="quantity" type="number" id="qty" name="qty">
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
export default {
  name: 'DiagonValley',
data() {
  return {
    cards: 
      [
        {
        title: 'book',
        price: 31,
        qty: 1,
      },
      {
        title: 'wand',
        price: 240,
        qty: 1,
      },
      {
        title: 'hat',
        price: 280,
        qty: 1,
      },

    ],
  }
},
computed: {
  totalCart(){
    return this.cards.price*this.cards.qty;
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


//todo: meter total por elemento
//todo: hacerlo como array iterable 
