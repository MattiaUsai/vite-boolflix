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
  <div class="row">
    <tvCardVue
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
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/size.scss" as *;
.row {
  display: flex;
}
.movieCard {
  width: 260px;
  background-color: white;
  color: black;
  margin: 5px;
}
</style>
