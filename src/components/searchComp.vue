<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      searchMovie: "",
      store,
    };
  },
  methods: {
    findMovie() {
      if (this.searchMovie) {
        store.APIurl = `https://api.themoviedb.org/3/search/movie?api_key=31435bc50ef6a0206603a4bcc88b5545&query=$${this.searchMovie}`;
        axios.get(store.APIurl).then((response) => {
          this.store.ApiCall = response.data;
          this.store.listMovie = response.data.results;
        });
      }
    },
  },
};
</script>
<template>
  <div class="search">
    <input v-model="searchMovie" type="text" />
    <button @click="findMovie">cerca</button>
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;
input {
  @include buttonStyle;
}
</style>
