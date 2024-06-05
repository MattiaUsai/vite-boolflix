<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    title: String,
    date: String,
    overview: String,
    score: String,
  },
};
</script>
<template>
  <div class="card">
    <img :src="image" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ score }}</p>
    <p>{{ date }}</p>
  </div>
</template>
<style scoped lang="scss">
.card {
  text-align: center;
  padding: 20px;
  img {
    border-radius: 100%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2),
      0 5px 10px 0 rgba(0, 0, 0, 0.19);
  }
  h3 {
    margin: 10px 0 40px 0;
  }
}
</style>
