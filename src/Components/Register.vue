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
        ref="emailInput"
      />
    </div>
    <div>
      <p>Username</p>
      <input
        type="text"
        id="username"
        class="bg-blue-300 p-2 border-2 border-black rounded-md"
        ref="usernameInput"
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
    <button type="submit" class="">Register</button>
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
    const usernameInput = ref(null);
    const router = useRouter();

    const registerUser = async () => {
      try {
        const resp = await axios.post("http://localhost:3000/auth/register", {
          username: usernameInput.value.value,
          email: emailInput.value.value,
          password: passwordInput.value.value,
        });
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
};
</script>
