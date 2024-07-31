import axios from "axios";

async function authenticateUser() {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/verify",
      {},
      { withCredentials: true }
    );
    return response.data.user;
  } catch (error) {
    return null;
  }
}

export default authenticateUser;
