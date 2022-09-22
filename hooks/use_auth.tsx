import { useEffect, useState } from "react";
import {
  getAuth,
  FacebookAuthProvider,
  User,
  AuthError,
  signInWithCredential,
} from "firebase/auth";
// import * as Facebook from "expo-facebook";
import * as Facebook2 from "expo-auth-session/providers/facebook";
import useFirebase from "./use_firebase";
import { REACT_APP_FACEBOOK_APP_ID, REACT_APP_EXPO_URL } from "@env";

const useAuth = () => {
  const { client } = useFirebase();
  const auth = getAuth(client);
  console.info("Client", client);
  console.info("Auth", auth);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.info("Envs", REACT_APP_FACEBOOK_APP_ID, REACT_APP_EXPO_URL);
  const [prompt, , promptAsync] = Facebook2.useAuthRequest({
    clientId: REACT_APP_FACEBOOK_APP_ID,
    redirectUri: REACT_APP_EXPO_URL,
  });

  const authenticate = async () => {
    try {
      console.log("Redirecting to: ", prompt?.redirectUri);

      const result = await promptAsync();

      if (result.type === "success") {
        const credential = FacebookAuthProvider.credential(
          result.authentication?.accessToken ?? ""
        );
        console.info("Credential", credential);
        await signInWithCredential(auth, credential);
      } else {
        console.error("Facebook login failed", result);
        setError("Facebook login cancelled or failed");
      }
    } catch (err) {
      console.error(err);
      const error = err as AuthError;

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      setError(`Error: ${errorMessage}. For user: ${email}`);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
    } catch (e) {
      console.error("Unable to logout", e);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user as User);
      }

      if (currentUser && !user) setCurrentUser(null);
    });

    return unsubscribe;
  }, []);

  return { signup: authenticate, currentUser, error, logout };
};

export default useAuth;
