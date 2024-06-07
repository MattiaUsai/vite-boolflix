<script>
import movieCardVue from "./filmCard.vue";
import { store } from "../store";
export default {
  data() {
    return { store };
  },
  methods: {
    funcAddPrefer(film) {
      store.listPreferFilm.push(film);
    },

    funcRemovePrefer(film) {
      const index = store.listPreferFilm.indexOf(film);
      console.log(index);
      store.listPreferFilm.splice(index);
    },
  },
  components: { movieCardVue },
};
</script>

<template>
  <div class="row">
    <movieCardVue
      v-show="store.isActiveFilm"
      class="movieCard"
      v-for="movie in store.listMovie"
      :title="movie.title"
      :date="movie.release_date"
      :originalTitle="movie.original_title"
      :score="movie.vote_average"
      :image="movie.poster_path"
      @addPrefer="funcAddPrefer(movie)"
    ></movieCardVue>

    <movieCardVue
      v-show="store.isActivePreferiti"
      class="movieCard"
      v-for="movie in store.listPreferFilm"
      :title="movie.title"
      :date="movie.release_date"
      :originalTitle="movie.original_title"
      :score="movie.vote_average"
      :image="movie.poster_path"
      @addPrefer="funcRemovePrefer(movie)"
    ></movieCardVue>
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
