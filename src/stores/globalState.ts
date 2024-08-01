import { defineStore } from "pinia";

const useGlobalStateStore = defineStore({
  id: "globalState",
  state: () => ({
    loggedin: false,
  }),
  getters: {},
  actions: {},
});

export default useGlobalStateStore;
