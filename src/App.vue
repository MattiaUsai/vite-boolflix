<script>
import axios from "axios";
import footerComp from "./components/footerComp.vue";
import headerComp from "./components/headerComp.vue";
import movieCardVue from "./components/movieCard.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
      movielist: [],
    };
  },

  methods: {
    callAPI() {},
  },

  components: {
    footerComp,
    headerComp,
    movieCardVue,
  },

  created() {
    axios.get(store.APIurl).then((response) => {
      this.store.ApiCall = response.data;
      this.store.listMovie = response.data.results;
      this.movielist = this.store.listMovie;
    });
  },
};
</script>

<template>
  <headerComp></headerComp>
  <div class="container">
    <div class="row">
      <movieCardVue
        class="movieCard"
        v-for="movie in store.listMovie"
        :title="movie.original_title"
        :date="movie.release_date"
        :overview="movie.overview"
        :score="movie.vote_average"
        :image="movie.poster_path"
      ></movieCardVue>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 1100px;
  margin: 0 auto;
  .row {
    padding: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .movieCard {
      width: calc(100% / 4 - 10px);
      background-image: url(../public/image.png);
      color: black;

      margin: 5px;
    }
  }
}
</style>
