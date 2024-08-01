<template>
  <button @click="logoutUser" class="w-16 h-8 bg-transparent">Log out</button>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const logoutUser = async () => {
      try {
        const resp = await axios.post(
          "http://localhost:3000/auth/logout",
          {},
          { withCredentials: true }
        );
        console.log("logged out resp:", resp.status);
        router.push("/");
      } catch (e) {
        console.log("Error:", e);
      }
    };

    return { logoutUser };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
