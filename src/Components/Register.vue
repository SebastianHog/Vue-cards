<template>
  <form
    class="border-2 border-black p-2 rounded-md"
    @submit.prevent="registerUser"
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
      <p>Username</p>
      <input
        type="text"
        id="username"
        class="bg-blue-300 p-2 border-2 border-black rounded-md"
        v-model="usernameInput"
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
    <button type="submit" class="">Register</button>
  </form>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { registerUserType } from "../types/user";

export default defineComponent({
  setup() {
    const emailInput = ref<string>("");
    const usernameInput = ref<string>("");
    const passwordInput = ref<string>("");

    const router = useRouter();

    const registerUser = async () => {
      const payload: registerUserType = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };
      try {
        const resp = await axios.post(
          "http://localhost:3000/auth/register",
          payload
        );
        if (resp.status == 200) router.push("/home");
        return resp;
      } catch (e) {
        console.error("Error registering, because of: ", e);
      }
    };

    return {
      emailInput,
      passwordInput,
      usernameInput,
      registerUser,
    };
  },
});
</script>
