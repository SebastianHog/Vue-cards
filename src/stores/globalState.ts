import { defineStore } from "pinia";

const useGlobalStateStore = defineStore({
  id: "globalState",
  state: () => ({
    loggedin: false,
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => state.loggedin,
  },
  actions: {
    setLoggedIn() {
      this.loggedin = true;
    },
    setLoggedOut() {
      this.loggedin = false;
    },
  },
});

export default useGlobalStateStore;
