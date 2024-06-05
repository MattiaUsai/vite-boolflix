<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <ul>
    <li>Film</li>
    <li>SerieTv</li>
    <li>Documentari</li>
    <li>Account</li>
    <li>Impostazioni</li>
  </ul>
</template>
<style scoped lang="scss">
ul {
  display: flex;
  li {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;
    &:hover {
      background-color: #ffffff97;
    }
  }
}
</style>
