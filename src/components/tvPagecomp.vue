<script>
import tvCardVue from "./tvCard.vue";
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    isFavorite(tvshow) {
      if (store.listPreferTv.includes(tvshow)) {
        return true;
      }
    },
    funcAddPreferTv(tvShow) {
      if (!store.listPreferTv.includes(tvShow)) {
        store.listPreferTv.push(tvShow);
      } else {
        console.log("elemento gia aggiunto ai preferiti");
      }
    },
    funcRemovePreferTv(tvShow) {},
  },
  components: {
    tvCardVue,
  },
};
</script>
<template>
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
      :favorite="isFavorite(tvshow)"
      @addPrefer="funcAddPreferTv(tvshow)"
    ></tvCardVue>
    <tvCardVue
      v-show="store.isActivePreferiti"
      class="movieCard"
      v-for="tvshow in store.listPreferTv"
      :title="tvshow.name"
      :date="tvshow.first_air_date"
      :originalTitle="tvshow.name"
      :score="tvshow.vote_average"
      :image="tvshow.poster_path"
      :favorite="isFavorite(tvshow)"
      @addPrefer="funcRemovePreferTv(movie)"
    ></tvCardVue>
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/size.scss" as *;
.container {
  @include containerLarge;

  .movieCard {
    width: calc(100% / 4 - 10px);
    background-color: white;
    color: black;
    margin: 5px;
  }
}
</style>
