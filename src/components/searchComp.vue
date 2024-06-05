<script>
export default {
  data() {},
  methods: {},
};
</script>
<template>
  <div class="search">
    <input type="text" />
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;
input {
  @include buttonStyle;
}
</style>
