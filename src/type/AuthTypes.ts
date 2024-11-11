import { User, UserCredential } from "firebase/auth";

export type AuthContextType = {
currentUser: User | null;
  loginWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
}