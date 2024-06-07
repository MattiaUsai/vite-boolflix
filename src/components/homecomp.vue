<script>
import { store } from "../store";
import filmPage from "./filmPageComp.vue";
import tvPage from "./tvPagecomp.vue";
import favoritePage from "./favoritePage.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {},

  components: {
    filmPage,
    tvPage,
    favoritePage,
  },
};
</script>
<template>
  <h2>Film</h2>
  <div class="row">
    <filmPage></filmPage>
  </div>
  <h2>Serie tv</h2>
  <div class="row">
    <tvPage></tvPage>
  </div>
  <h2>Preferiti</h2>
  <div class="row">
    <favoritePage></favoritePage>
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/size.scss" as *;

.row {
  width: 100%;
  display: flex;
}
</style>
