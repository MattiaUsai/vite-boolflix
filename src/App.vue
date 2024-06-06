<script>
import axios from "axios";
import footerComp from "./components/footerComp.vue";
import headerComp from "./components/headerComp.vue";
import movieCardVue from "./components/movieCard.vue";
import tvCardVue from "./components/tvCard.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    callAPI() {},
  },

  components: {
    footerComp,
    headerComp,
    movieCardVue,
    tvCardVue,
  },

  created() {
    axios.get(store.APIurlMovie).then((response) => {
      this.store.ApiCall = response.data;
      this.store.listMovie = response.data.results;
    });
    axios.get(store.APIurlTvShow).then((response) => {
      this.store.ApiCall = response.data;
      this.store.listTvShow = response.data.results;
      console.log(response.data.results);
    });
  },
};
</script>

<template>
  <headerComp></headerComp>
  <div class="container">
    <div class="row">
      <tvCardVue
        v-show="store.isActiveSerieTv"
        class="movieCard"
        v-for="tvshow in store.listTvShow"
        :title="tvshow.name"
        :date="tvshow.first_air_date"
        :originalTitle="tvshow.name"
        :score="tvshow.vote_average"
        :image="tvshow.poster_path"
      ></tvCardVue>

      <movieCardVue
        v-show="store.isActiveFilm"
        class="movieCard"
        v-for="movie in store.listMovie"
        :title="movie.title"
        :date="movie.release_date"
        :originalTitle="movie.original_title"
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
      background-color: white;

      color: black;

      margin: 5px;
    }
  }
}
</style>
