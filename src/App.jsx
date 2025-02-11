import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase/firebaseconfig';



function App() {
  const [count, setCount] = useState(0);
    
  const handleGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <button onClick={handleGoogle} className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200">
      Continue with Google
    </button>
  </div>
  );
}

export default App;
