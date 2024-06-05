<script>
import searchComp from "./searchComp.vue";
import logoComp from "./logoComp.vue";
import menuHeader from "./menuHeader.vue";
export default {
  data() {},
  methods: {},
  components: {
    searchComp,
    logoComp,
    menuHeader,
  },
};
</script>
<template>
  <header>
    <searchComp></searchComp>
    <logoComp></logoComp>
    <menuHeader></menuHeader>
  </header>
</template>

<style scoped>
header {
  height: 70px;
  width: 100%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
</style>
