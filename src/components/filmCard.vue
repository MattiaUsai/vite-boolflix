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
    favorite: Boolean,
  },
};
</script>
<template>
  <div class="card" :style="imgPhat(image)">
    <p
      @click="$emit('addPrefer')"
      class="hearts"
      :class="{ favoriteActive: favorite }"
    >
      &hearts;
    </p>
    <div class="cardText">
      <h2>{{ title }}</h2>
      <span> Titolo Originale: {{ originalTitle }}</span>
      <p class="starcolor">
        {{ scoreStar(score) }}<i class="fa-solid fa-star"></i>
      </p>
      <p class="date">Data Prima Uscita: {{ date }}</p>
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
  background-size: cover;
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
    color: rgb(255, 255, 255);
    background-color: black;
  }
  .favoriteActive {
    color: red;
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
    .date {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    .starcolor {
      color: $secondaryTextColor;
    }
  }
}
</style>
