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
      store.isActivePreferiti = false;
      store.isActiveFilm = false;
      store.isActiveSerieTv = false;
    },
    FilmPage() {
      store.isActiveFilm = !store.isActiveFilm;
      store.isActiveHome = false;
      store.isActiveSerieTv = false;
      store.isActivePreferiti = false;
    },
    SerieTvPage() {
      store.isActiveSerieTv = !store.isActiveSerieTv;
      store.isActiveFilm = false;
      store.isActiveHome = false;
      store.isActivePreferiti = false;
    },
    PreferitiPage() {
      store.isActivePreferiti = !store.isActivePreferiti;
      store.isActiveFilm = false;
      store.isActiveHome = false;
      store.isActiveSerieTv = false;
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
