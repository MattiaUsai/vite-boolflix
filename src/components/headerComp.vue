<script>
import searchComp from "./searchComp.vue";
import logoComp from "./logoComp.vue";
import menuHeader from "./menuHeader.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    logoComp,
    menuHeader,
    searchComp,
  },
};
</script>
<template>
  <header>
    <logoComp></logoComp>
    <menuHeader></menuHeader>
    <searchComp></searchComp>
  </header>
</template>

<style scoped>
header {
  height: 70px;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
</style>
