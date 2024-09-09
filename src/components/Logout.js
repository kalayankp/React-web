// src/Logout.js
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
