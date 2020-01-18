<template>
  <div class="hello">
    <h1>{{ 'Shopping time' }}</h1>
    <section>
    <h2>Shopping Cart Items:</h2>
  <div>
    <h3>{{items.wandsTitle}}</h3>
    <label for="PriceWand">Price wands</label>
    <input v-model="items.wandPrice" placeholder="price per wand" type="number" id="PriceWand" name="PriceWand">
     <label for="QtyWands">Quantity wands</label>
    <input v-model="items.wandsQty" placeholder="quantity" type="number" id="QtyWands" name="QtyWands">
  </div>

  <div>
    <h3>{{items.booksTitle}}</h3>
    <label for="PriceBook">Price book</label>
    <input v-model="items.bookPrice" placeholder="price per book" type="number" id="PriceBook" name="PriceBook">
    <label for="QtyBook">Quantity book</label>
    <input v-model="items.booksQty" placeholder="quantity" type="number" id="QtyBook" name="QtyBook">
  </div>

  <div>
    <h3>{{items.hatsTitle}}</h3>
    <label for="PriceHat">Price hat</label>
    <input v-model="items.hatPrice" placeholder="price per hat" type="number" id="PriceHat" name="PriceHat">
    <label for="QtyHat">Quantity hat</label>
    <input v-model="items.hatsQty" placeholder="quantity" type="number" id="QtyHat" name="QtyHat ">
  </div>

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
    items: {
      wandsTitle: 'Wands',
      booksTitle: 'Books',
      hatsTitle: 'Hats',
      wandPrice: 0,
      bookPrice: 0,
      hatPrice: 0,
      wandsQty: 0,
      booksQty: 0,
      hatsQty: 0,
    }
  }
},
computed: {
  totalCart(){
    return this.items.wandPrice*this.items.wandsQty + this.items.bookPrice*this.items.booksQty +  this.items.hatPrice*this.items.hatsQty;
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
