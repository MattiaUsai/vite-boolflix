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
  <div class="container">
    <div class="row">
      <filmPage></filmPage>
    </div>
  </div>
  <h2>Tv Show</h2>
  <div class="container">
    <div class="row">
      <tvPage></tvPage>
    </div>
  </div>
  <h2>Preferiti</h2>
  <div class="container">
    <div class="row">
      <favoritePage></favoritePage>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/size.scss" as *;

h2 {
  margin-top: 50px;
}
.container {
  width: 1100px;
  overflow: scroll;
  display: flex;

  .row {
    width: 500%;
    .card {
      width: 5000px;
    }
  }
}
</style>
