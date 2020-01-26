<template>
  <div>
    <h1>Sorting Hat</h1>
      <img id="crazy-hat" class="m" src="https://media.thetab.com/blogs.dir/13/files/2012/11/sorting-hat.png"/>
    <app-button 
      :houses="houses" 
    />
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";

export default {
  name: "HistoryHat",
  components: {
    AppButton
  },
  data() {
    return {
      houses: ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"],
    };
  },
};
</script>

<style lang="css" scoped>
.m{
  margin: 80px 0px 80px 80px;
}
</style>
