import { reactive } from "vue";

export const store = reactive({
  ApiCall: {},
  listMovie: [],
  listTvShow: [],
  listPreferTv: [],
  listPreferFilm: [],
  isActiveHome: false,
  isActiveFilm: false,
  isActiveSerieTv: false,
  isActivePreferiti: false,
  searchMovie: "Trolls",
  APIurlTvShow: `https://api.themoviedb.org/3/search/tv?language=it-IT&api_key=31435bc50ef6a0206603a4bcc88b5545&query=superman`,
  APIurlMovie: `https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=31435bc50ef6a0206603a4bcc88b5545&query=superman`,
});
