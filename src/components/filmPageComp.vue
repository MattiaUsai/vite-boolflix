<script>
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
    funcAddPrefer(film) {
      if (!store.listPreferFilm.includes(film)) {
        store.listPreferFilm.push(film);
      } else {
        this.funcRemovePrefer(film);
      }
    },

    funcRemovePrefer(film) {
      const favoriteArray = store.listPreferFilm.filter(
        (element) => element.id !== film.id
      );
      store.listPreferFilm = favoriteArray;
    },
  },
  components: { movieCardVue },
};
</script>

<template>
  <div class="row">
    <movieCardVue
      class="movieCard"
      v-for="movie in store.listMovie"
      :title="movie.title"
      :date="movie.release_date"
      :originalTitle="movie.original_title"
      :score="movie.vote_average"
      :image="movie.poster_path"
      :favorite="isFavorite(movie)"
      @addPrefer="funcAddPrefer(movie)"
    ></movieCardVue>
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
