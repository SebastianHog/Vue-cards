<template>
  <div class="h-screen w-screen bg-primary"></div>
</template>

<script>
import authenticateUser from "../utils/authenticateUser.ts";
import { useRouter } from "vue-router";
import LogoutButton from "../Components/LogoutButton.vue";

export default {
  components: { LogoutButton: LogoutButton },
  data() {
    return {
      userLoggedIn: false,
    };
  },
  async mounted() {
    const router = useRouter();
    const user = await authenticateUser();
    if (!user || user == null) {
      router.push("/");
    } else console.log("logged in");
  },
};
</script>
