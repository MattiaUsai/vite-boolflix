<script>
import axios from "axios";
import footerComp from "./components/footerComp.vue";
import headerComp from "./components/headerComp.vue";
import movieCardVue from "./components/movieCard.vue";
import { store } from "./store";

export default {
  data() {
    return {
      movieList: [],
      store,
    };
  },

  methods: {},

  components: {
    footerComp,
    headerComp,
    movieCardVue,
  },

  created() {
    axios.get(store.APIurl).then((response) => {
      this.store.ApiCall = response.data;
      this.store.listMovie = response.data.results;
      this.movieList = store.listMovie;
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
        v-for="movie in movieList"
        :title="movie.original_title"
        :date="movie.release_date"
        :overview="movie.overview"
        :score="movie.vote_average"
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
      background-color: antiquewhite;

      margin: 5px;
    }
  }
}
</style>
