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
  <movieCardVue v-for="movie in movieList"></movieCardVue>
</template>

<style></style>
