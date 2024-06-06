<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    HomePage() {
      store.isActiveHome = !store.isActiveHome;
    },
    FilmPage() {
      store.isActiveFilm = !store.isActiveFilm;
    },
    SerieTvPage() {
      store.isActiveSerieTv = !store.isActiveSerieTv;
      store.APIurl = `https://api.themoviedb.org/3/search/tv?language=it-IT&api_key=31435bc50ef6a0206603a4bcc88b5545&query=${store.searchMovie}`;
      axios.get(store.APIurl).then((response) => {
        this.store.ApiCall = response.data;
        this.store.listMovie = response.data.results;
      });
    },
    PreferitiPage() {
      store.isActivePreferiti = !store.isActivePreferiti;
    },
  },
};
</script>
<template>
  <ul>
    <li :class="{ active: store.isActiveHome }" @click="HomePage()">Home</li>
    <li :class="{ active: store.isActiveFilm }" @click="FilmPage()">Film</li>
    <li :class="{ active: store.isActiveSerieTv }" @click="SerieTvPage()">
      SerieTv
    </li>
    <li :class="{ active: store.isActivePreferiti }" @click="PreferitiPage()">
      Preferiti
    </li>
  </ul>
</template>
<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;

ul {
  display: flex;
  li {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 3px;
    &:hover {
      background-color: #ffffff55;
      color: black;
    }
    &.active {
      color: $secondaryTextColor;
    }
  }
}
</style>
