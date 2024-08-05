<template>
  <button @click="logoutUser" class="w-16 h-8 bg-transparent">Log out</button>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const logoutUser = async () => {
      try {
        const resp = await axios.post(
          "http://localhost:3000/auth/logout",
          {},
          { withCredentials: true }
        );
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
});
</script>
