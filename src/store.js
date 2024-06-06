import { reactive } from "vue";

export const store = reactive({
  ApiCall: {},
  listMovie: [],
  isActiveHome: false,
  isActiveFilm: false,
  isActiveSerieTv: false,
  isActivePreferiti: false,
  searchMovie: "Trolls",

  APIurl: `https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=31435bc50ef6a0206603a4bcc88b5545&query=trools`,
});
