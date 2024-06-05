<script>
export default {
  data() {
    return {};
  },
  methods: {
    imgPhat(phat) {
      console.log(
        `background-image:url(https://image.tmdb.org/t/p/original/${phat})`
      );
      return `background-image:url(https://image.tmdb.org/t/p/original/${phat})`;
    },
  },
  props: {
    title: String,
    date: String,
    overview: String,
    score: Number,
    image: String,
  },
};
</script>
<template>
  <div class="card" :style="imgPhat(image)">
    <div class="cardText">
      <h2>{{ title }}</h2>
      <span>{{ overview }}</span>
      <p>{{ score }}</p>
      <p>{{ date }}</p>
      <p>{{ image }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;

  overflow: scroll;
  background-position: center;
  background-size: contain;
  position: relative;
  .cardText {
    display: none;
    height: 100%;
    width: 100%;
    padding: 10px;
  }

  &:hover {
    .cardText {
      display: block;
      background-color: black;
      color: white;
    }
  }
}
</style>
