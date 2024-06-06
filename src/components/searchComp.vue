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
        store.APIurl = `https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=31435bc50ef6a0206603a4bcc88b5545&query=$${store.searchMovie}`;
        axios.get(store.APIurl).then((response) => {
          store.ApiCall = response.data;
          store.listMovie = response.data.results;
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
    <button @click="findMovie">cerca</button>
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
}
</style>
