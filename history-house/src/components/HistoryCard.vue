<template>
  <ul>
    <li :bind="houseData">
      <div class="card" :style="{ backgroundColor: bgColor }">
        <p :style="{ color: color }">{{ `House name: ${houseData.name}`}}</p>
        <p :style="{ color: color }">{{ `Mascot: ${houseData.mascot}`}}</p>
        <p :style="{ color: color }">{{ `Head: ${houseData.headOfHouse}`}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HouseCard",
  props: {
    houseData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    bgColor({ houseData }) {
      return houseData.name === "Gryffindor" ? "#ff2400" : houseData.colors[0];
    },
    color({ houseData }) {
      return houseData.name === "Ravenclaw"
        ? "DarkGoldenrod"
        : houseData.colors[1];
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  font-size: 16px;
  border-radius: 4px;
  display: inline-block;
  height: 160px;
  margin: 1rem;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.075), 0 3px 6px rgba(0, 0, 0, 0.048);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>