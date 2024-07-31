<template>
  <button
    @click="logoutUser"
    class="w-16 h-8 bg-transparent border-2 border-black rounded-lg"
  >
    Log out
  </button>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async logoutUser() {
      try {
        const resp = await axios.post(
          "http://localhost:3000/auth/logout",
          {},
          { withCredentials: true }
        );
        console.log("resp:", resp.status);
      } catch (e) {
        console.log("Error:", e);
      }
    },
  },
};
</script>
