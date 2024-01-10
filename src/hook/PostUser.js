import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


export const useGoogleAuth = () => {
  const [error, setError] = useState(null);
  const redirectToHome = useNavigate()


  const handleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/google",
        {
          token: credentialResponse.credential,
        }
      );

      if (response) {
        const dataUser = response.data.user;
        const userJSON = JSON.stringify(dataUser);
        Cookies.set("user", userJSON, { expires: 7 });
        redirectToHome("/Home");
      }

      response ? "ok" : null;
    } catch (error) {
      console.error("Error sending token to server", error);
      setError(error);
    }
  };

  return { handleSuccess, error };
};
