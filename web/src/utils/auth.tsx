import axios from "axios";
// import { Session } from "next-auth";
export const getAuth = async ({ authState }: any) => {
  if (!authState) {
    const session = await axios.get("http://localhost:3000/api/auth", {
      withCredentials: true,
    });
    if (session) {
      return { session };
    }
    return null;
  }

  return null;
};
