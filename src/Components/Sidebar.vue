<template>
  <ul class="h-screen flex flex-col bg-quaternary">
    <li
      class="text-2xl text-left pl-2 font-semibold flex items-center text-nowrap sidebarSetting"
    >
      User settings
    </li>
    <li class="sidebarSetting">2</li>
    <li class="sidebarSetting">3</li>
    <li class="sidebarSetting">4</li>
    <li class="sidebarSetting">5</li>
    <li class="sidebarSetting">6</li>
    <li
      class="fixed bottom-0 border-black border-2 pl-2 m-2 h-10 w-1/3 rounded-sm flex items-center justify-center"
    >
      <LogoutButton />
    </li>
  </ul>
</template>

<script>
import LogoutButton from "./LogoutButton.vue";
export default {
  components: { LogoutButton },
};
</script>

<style scoped>
.sidebarSetting {
  height: 3.5rem;
}
</style>
