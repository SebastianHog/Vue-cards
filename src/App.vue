<template>
  <div>
    <Header v-if="isLoggedIn" class="fixed top-0"></Header>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import Header from "./Components/Header.vue";
import useGlobalStateStore from "./stores/globalState";

export default defineComponent({
  components: { Header },
  setup() {
    const state = useGlobalStateStore();
    const { isLoggedIn } = storeToRefs(state);
    return { isLoggedIn };
  },
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
