<template>
        <li>
          <div v-if="card.qty === 0">
            <p>No items to show</p>
          </div>

          <div class="card" v-else>
            <h3>{{card.title}}</h3>
            <label for="price">Price:</label>
            <input 
            v-model="card.price"
            placeholder="price per item" 
            type="number" 
            id="price" 
            name="price">
            <label for="qty">Quantity:</label>
            <input 
            v-model="card.qty"
             placeholder="quantity" 
             type="number" 
             id="qty" 
             name="qty"
            >
             <p>{{`total ${card.title}s'price: ${priceCategory(card)}`}}</p>

             <button
             @click="onEmitData(index)"
             >
                 Anadir item
             </button>
             <button
             @click="deleteItem(index)"
             >
                 Eliminar item
             </button>
          </div>
        </li>
</template>

<script>
export default {
  name: 'DiagonItem',
  props: {
      card: {
        type: Object,
        default: ()=>{},
      },
    index: {
        type: String,
        default: "",
      }
  },
    methods:{
        priceCategory(item) {
            return item.qty * item.price;
        },
        onEmitData(){
            this.$emit('card-data', {product: this.card, ind: this.index});
            },
        deleteItem(){
            this.$emit('card-index', this.index);
        },
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


//todo: meter total por elemento
//todo: hacerlo como array iterable 
