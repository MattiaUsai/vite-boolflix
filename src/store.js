import { reactive } from "vue";

export const store = reactive({
  ApiCall: {},
  listMovie: [],

  APIurl: `https://api.themoviedb.org/3/search/movie?api_key=31435bc50ef6a0206603a4bcc88b5545&query=superman`,
});
