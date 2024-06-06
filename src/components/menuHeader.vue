<script>
export default {
  data() {
    return {
      isActiveHome: false,
      isActiveFilm: false,
      isActiveSerieTv: false,
      isActivePreferiti: false,
    };
  },
  methods: {
    HomePage() {
      this.isActiveHome = !this.isActiveHome;
    },
    FilmPage() {
      this.isActiveFilm = !this.isActiveFilm;
    },
    SerieTvPage() {
      this.isActiveSerieTv = !this.isActiveSerieTv;
    },
    PreferitiPage() {
      this.isActivePreferiti = !this.isActivePreferiti;
    },
  },
};
</script>
<template>
  <ul>
    <li :class="{ active: isActiveHome }" @click="HomePage()">Home</li>
    <li :class="{ active: isActiveFilm }" @click="FilmPage()">Film</li>
    <li :class="{ active: isActiveSerieTv }" @click="SerieTvPage()">SerieTv</li>
    <li :class="{ active: isActivePreferiti }" @click="PreferitiPage()">
      Preferiti
    </li>
  </ul>
</template>
<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;

ul {
  display: flex;
  li {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 3px;
    &:hover {
      background-color: #ffffff55;
      color: black;
    }
    &.active {
      color: $secondaryTextColor;
    }
  }
}
</style>
