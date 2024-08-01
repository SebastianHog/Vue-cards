<template>
  <div>
    <Header class="fixed top-0"></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./Components/Header.vue";

export default {
  components: { Header },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
