<script>
import { store } from "../store";
import filmPage from "./filmPageComp.vue";
import tvPage from "./tvPagecomp.vue";

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
  },
};
</script>
<template>
  <div class="homePageContainer">
    <div class="container">
      <h2>Film</h2>
      <div class="row">
        <filmPage></filmPage>
      </div>
      <h2>Serie tv</h2>
      <div class="row"></div>
      <h2>Preferiti</h2>
      <div class="row"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.homePageContainer {
  .container {
    max-width: 1100px;
    .row {
      display: flex;
    }
  }
}
</style>
