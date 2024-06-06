<script>
export default {
  data() {
    return {};
  },
  methods: {
    imgPhat(phat) {
      if (phat) {
        return `background-image:url(https://image.tmdb.org/t/p/original/${phat})`;
      } else {
        return `background-image: url(/notfound.jpg)`;
      }
    },
    scoreStar(score) {
      const point = Math.round(score / 2);
      return point;
    },
  },
  props: {
    title: String,
    date: String,
    originalTitle: String,
    score: Number,
    image: String,
  },
};
</script>
<template>
  <div class="card" :style="imgPhat(image)">
    <p @click="$emit('addPrefer')" class="hearts">&hearts;</p>
    <div class="cardText">
      <h2>{{ title }}</h2>
      <span>Titolo Originale:{{ originalTitle }}</span>
      <p>
        {{ scoreStar(score) }}<i class="fa-solid fa-star"></i
        ><i class="fa-regular fa-star"></i>
      </p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  box-shadow: 1px 1px 5px $borderColor;

  overflow: scroll;
  background-position: center;
  background-size: contain;
  position: relative;
  .hearts {
    height: 50px;
    width: 50px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 0 20px;

    font-size: 30px;
    color: red;
    background-color: black;
  }
  .cardText {
    display: none;
    min-height: 100%;
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
