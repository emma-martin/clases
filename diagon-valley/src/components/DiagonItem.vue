<template>
  <div class="card">
      <form >
        <h3>{{card.title}}</h3>
        <label for="price">Price:</label>
        <input v-model="card.price" placeholder="price per item" name="price" />
        <label for="qty">Quantity:</label>
        <input v-model="card.qty" placeholder="quantity" name="qty" />
        <p>{{`total ${card.title}s' price: ${priceCategory(card)}`}}</p>
      </form>
      <div>
        <button @click="incrementItem(card)">{{`Add ${card.title}s`}}</button>
        <button @click="decrementItem(card)">{{`Remove ${card.title}s`}}</button>
      </div>
      <button @click="deleteItem(card)">{{`Delete ${card.title}s`}}</button>
  </div>
</template>

<script>
export default {
  name: "DiagonItem",
  props: {
    card: {
      type: Object,
      default: () => {}
    },
  },
  methods: {
    priceCategory(item) {
      return item.qty * item.price;
    },
    decrementItem() {
      this.$emit("decrement",this.card);
    },
    incrementItem() {
      this.$emit("increment", this.card);
    },
    deleteItem() {
      this.$emit("delete", this.card);
    }
  }
};
</script>
<style scoped lang="scss">

.card{
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}
label{
  display: block;
}



</style>
