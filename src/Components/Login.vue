<template>
  <form
    class="border-2 border-black p-2 rounded-md"
    @submit.prevent="loginUser"
  >
    <div>
      <p>Email</p>
      <input
        type="text"
        id="email"
        class="bg-blue-300 p-2 border-2 border-black rounded-md"
        ref="emailInput"
      />
    </div>
    <div>
      <p>Password</p>
      <input
        type="password"
        id="password"
        class="bg-blue-300 p-2 border-2 border-black rounded-md"
        ref="passwordInput"
      />
    </div>
    <button
      type="submit"
      @click="loginUser"
      class="border-2 border-black rounded-md mt-2 px-1 active:bg-black active:bg-opacity-15"
    >
      Log in
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const emailInput = ref(null);
    const passwordInput = ref(null);
    const router = useRouter();

    const loginUser = async () => {
      try {
        const resp = await axios.post(
          "http://localhost:3000/auth/login",
          {
            email: emailInput.value.value,
            password: passwordInput.value.value,
          },
          {
            withCredentials: true,
          }
        );
        if (resp.status === 200) {
          router.push("/home");
        }
      } catch (e) {
        console.error("Error: ", e);
      }
    };

    return {
      emailInput,
      passwordInput,
      loginUser,
    };
  },
};
</script>
