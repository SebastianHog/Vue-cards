<template>
  <div class="h-screen w-screen bg-primary"></div>
</template>

<script>
import authenticateUser from "../utils/authenticateUser.ts";
import { useRouter } from "vue-router";
import LogoutButton from "../Components/LogoutButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
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
    }
  },
});
</script>
