<template>
  <div class="w-screen h-screen bg-blue-300 flex items-center justify-center">
    <div
      class="m-2 border-2 border-black min-w-1/2 rounded-lg grid sm:grid-cols-2 sm:text-sm lg:w-1/2"
    >
      <div
        class="bg-blue-200 sm:rounded-tr-none rounded-tl-md rounded-tr-md p-2 h-auto border-black md:border-tr-none sm:border-r-2 md:min-h-96 md:rounded-tr-none lg:rounded-bl-md lg:rounded-tr-none"
      >
        <h1 class="font-bold text-2xl">Log in to use this website</h1>
        <p class="leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id
          voluptatibus eaque hic totam. Iure molestias ex ipsum! Modi magni
          voluptatum labore quis deserunt reprehenderit quod sint voluptatem
          iusto ex! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi id voluptatibus eaque hic totam. Iure molestias ex ipsum! Modi
          magni voluptatum labore quis deserunt reprehenderit quod sint
          voluptatem iusto ex!
        </p>
      </div>
      <div
        class="bg-blue-200 border-t-2 border-black p-2 rounded-br-md sm:rounded-tr-none rounded-bl-md sm:border-t-0 md:rounded-bl-none md:rounded-tr-md lg:rounded-bl-none"
      >
        <div v-if="!userLoggedIn">
          <div v-if="login">
            <Login />
            <p>
              Don't have an account yet?
              <span
                @click="
                  {
                    this.login = false;
                  }
                "
                class="text-blue-900 cursor-pointer"
                >Make one!</span
              >
            </p>
          </div>
          <div v-else>
            <Register />

            <p>
              Already have an account?
              <span
                @click="
                  {
                    this.login = true;
                  }
                "
                class="text-blue-900 cursor-pointer"
                >Log in!</span
              >
            </p>
          </div>
        </div>
        <div v-else>logged in</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Register from "../Components/Register.vue";
import Login from "../Components/Login.vue";
import authenticateUser from "../utils/authenticateUser.ts";

export default {
  components: { Register, Login },
  data() {
    return {
      login: true,
      userLoggedIn: false,
    };
  },
  async mounted() {
    const router = useRouter();
    const user = await authenticateUser();
    if (user) {
      router.push("/home");
    } else console.log("not logged in");
  },
};
</script>
