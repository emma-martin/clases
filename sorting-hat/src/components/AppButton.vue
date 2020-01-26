<template>
  <div>
    <button @click="selectHouse">So put me on! Don't be afraid!</button>
    <p>{{house}}</p>
  </div>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    houses: { type: Array, default: () => [] }
  },
  data() {
    return {
      house: ""
    };
  },
  methods: {
    selectHouse() {
      this.house = "So try me on and I will tell you. Where you ought to be.";
      const hat = document.querySelector('#crazy-hat');
      hat.classList.add("rotate");
      setTimeout(() => {
        this.house = this.houses[(Math.random() * this.houses.length) | 0];
        hat.classList.remove("rotate");
      }, 3000);
    }
  }
};
</script>
<style>
@keyframes rotate {
  from {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
.rotate {
  animation: rotate 1s linear infinite;
}
</style>