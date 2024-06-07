<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    findMovie() {
      if (store.searchMovie) {
        store.APIurlMovie = `https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=31435bc50ef6a0206603a4bcc88b5545&query=$${store.searchMovie}`;
        axios.get(store.APIurlMovie).then((response) => {
          this.store.ApiCall = response.data;
          this.store.listMovie = response.data.results;
        });
        store.APIurlTvShow = `https://api.themoviedb.org/3/search/tv?language=it-IT&api_key=31435bc50ef6a0206603a4bcc88b5545&query=$${store.searchMovie}`;
        axios.get(store.APIurlTvShow).then((response) => {
          this.store.ApiCall = response.data;
          this.store.listTvShow = response.data.results;
        });
      }
    },
  },
};
</script>
<template>
  <div class="search">
    <input
      v-model="store.searchMovie"
      placeholder="Cerca un film"
      type="text"
    />
    <button @click="findMovie">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;
input {
  @include buttonStyle;
  border: 1px solid $borderColor;
}
button {
  @include buttonStyle;
  font-size: 20px;
}
.search {
  margin: 0 20px;
}
</style>
