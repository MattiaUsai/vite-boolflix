<script>
import axios from "axios";
import footerComp from "./components/footerComp.vue";
import headerComp from "./components/headerComp.vue";
import { store } from "./store";
import filmPage from "./components/filmPageComp.vue";
import tvPage from "./components/tvPagecomp.vue";
import homePage from "./components/homecomp.vue";
import favoritePage from "./components/favoritePage.vue";
export default {
  data() {
    return {
      store,
    };
  },

  methods: {},

  components: {
    footerComp,
    headerComp,
    filmPage,
    tvPage,
    homePage,
    favoritePage,
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
      <filmPage v-if="store.isActiveFilm"></filmPage>
      <tvPage v-if="store.isActiveSerieTv"></tvPage>
      <homePage v-if="store.isActiveHome"></homePage>
      <favoritePage v-if="store.isActivePreferiti"></favoritePage>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./scss/partials/size.scss" as *;
.container {
  @include containerLarge;
}
</style>
