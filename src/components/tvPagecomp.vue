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
    funcAddPreferTv(tvshow) {
      if (!store.listPreferTv.includes(tvshow)) {
        store.listPreferTv.push(tvshow);
      } else {
        this.funcRemovePreferTv(tvshow);
      }
    },
    funcRemovePreferTv(tvshow) {
      const favoriteArray = store.listPreferTv.filter(
        (element) => element.id !== tvshow.id
      );
      store.listPreferTv = favoriteArray;
    },
  },
  components: {
    tvCardVue,
  },
};
</script>
<template>
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
    @addPrefer="funcRemovePreferTv(tvshow)"
  ></tvCardVue>
</template>
<style scoped lang="scss">
@use "../scss/partials/size.scss" as *;

.movieCard {
  width: calc(100% / 4 - 10px);
  background-color: white;
  color: black;
  margin: 5px;
}
</style>
