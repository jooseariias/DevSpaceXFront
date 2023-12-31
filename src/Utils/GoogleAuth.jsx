import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useGoogleAuth } from "../hook/PostUser";

export default function GoogleAuth() {
  const { handleSuccess, error } = useGoogleAuth();
  return (
    <div>
      <GoogleOAuthProvider clientId="980204888306-1hsg9ji82851qv9hf7fb6hrt1tm1ma50.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}
