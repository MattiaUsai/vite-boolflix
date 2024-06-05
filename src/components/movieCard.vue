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
    <span>{{ overview }}</span>
    <h3>{{ title }}</h3>
    <p>{{ score }}</p>
    <p>{{ date }}</p>
  </div>
</template>
<style scoped lang="scss">
.card {
  text-align: center;
  height: 300px;
  padding: 20px;
  overflow: scroll;
  span {
    display: none;
  }
  h3 {
    margin: 10px 0 40px 0;
  }
  &:hover {
    span {
      display: inline;
    }
    p {
      display: none;
    }
    h3 {
      display: none;
    }
  }
}
</style>
