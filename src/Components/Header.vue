<template>
  <Sidebar
    class="duration-500"
    :class="this.openSidebar ? 'openSidebar' : 'closedSidebar'"
  ></Sidebar>
  <header
    class="w-screen h-14 bg-black bg-opacity-15 grid grid-cols-5 fixed :::: md:h-24"
  >
    <div class="flex justify-center">
      <img
        src="https://www.svgrepo.com/show/324225/navigation-back-arrow.svg"
        alt="back"
        class="w-10 left-1 top-2 fixed border-2 border-black rounded-full p-2 :::: md:w-20"
        @click="$router.back(-1)"
      />
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div class="flex justify-center items-center">
      <img
        src="../assets/svgs/profile-icon.svg"
        alt="profile"
        class="w-10"
        @click="toggleSidebar"
      />
    </div>
  </header>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  components: { Sidebar },
  data() {
    return {
      openSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  },
};
</script>

<style>
.openSidebar {
  width: 70%;
  position: fixed;
  right: 1px;
}
.closedSidebar {
  width: 0%;
  position: fixed;
  right: 1px;
}
</style>
