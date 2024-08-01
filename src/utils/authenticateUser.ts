import axios from "axios";
import useGlobalStateStore from "../stores/globalState";

async function authenticateUser() {
  const state = useGlobalStateStore();

  try {
    const response = await axios.post(
      "http://localhost:3000/auth/verify",
      {},
      { withCredentials: true }
    );
    if (response.status === 200) {
      state.setLoggedIn();
    } else {
      state.setLoggedOut();
    }
    return response.data.user;
  } catch (error) {
    state.setLoggedOut();
    return null;
  }
}

export default authenticateUser;
