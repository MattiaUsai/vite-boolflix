<script>
import tvCardVue from "./tvCard.vue";
import movieCardVue from "./filmCard.vue";
import { store } from "../store";
export default {
  data() {
    return { store };
  },
  methods: {
    isFavorite(film) {
      if (store.listPreferFilm.includes(film)) {
        return true;
      }
    },
    isFavorite(tvshow) {
      if (store.listPreferTv.includes(tvshow)) {
        return true;
      }
    },
    funcRemovePrefer(film) {
      const favoriteArray = store.listPreferFilm.filter(
        (element) => element.id !== film.id
      );
      store.listPreferFilm = favoriteArray;
    },
    funcRemovePreferTv(tvshow) {
      const favoriteArray = store.listPreferTv.filter(
        (element) => element.id !== tvshow.id
      );
      store.listPreferTv = favoriteArray;
    },
  },
  components: { movieCardVue, tvCardVue },
};
</script>

<template>
  <movieCardVue
    class="movieCard"
    v-for="movie in store.listPreferFilm"
    :title="movie.title"
    :date="movie.release_date"
    :originalTitle="movie.original_title"
    :score="movie.vote_average"
    :image="movie.poster_path"
    :favorite="isFavorite(movie)"
    @addPrefer="funcRemovePrefer(movie)"
  ></movieCardVue>
  <tvCardVue
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
