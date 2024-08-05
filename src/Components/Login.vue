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
        v-model="emailInput"
      />
    </div>
    <div>
      <p>Password</p>
      <input
        type="password"
        id="password"
        class="bg-blue-300 p-2 border-2 border-black rounded-md"
        v-model="passwordInput"
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

<script lang="ts">
import axios from "axios";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { loginUserType } from "../types/user";

export default defineComponent({
  setup() {
    const emailInput = ref<string>("");
    const passwordInput = ref<string>("");
    const router = useRouter();

    const loginUser = async () => {
      const payload: loginUserType = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      try {
        const resp = await axios.post(
          "http://localhost:3000/auth/login",
          payload,
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
});
</script>
