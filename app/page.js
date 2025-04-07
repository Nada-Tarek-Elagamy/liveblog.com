"use client";
import { useState } from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const HomePage = () => {
  const [showSignUp, setShowSignUp] = useState(true);  // State to toggle between Sign Up and Sign In

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Live Blog</h1>

      {/* Buttons to toggle between Sign Up and Sign In forms */}
      <div>
        <button onClick={() => setShowSignUp(true)} style={{ marginRight: "20px", padding: "10px 20px" }}>
          Sign Up
        </button>
        <button onClick={() => setShowSignUp(false)} style={{ padding: "10px 20px" }}>
          Sign In
        </button>
      </div>

      {/* Conditionally render the Sign Up or Sign In component based on the state */}
      {showSignUp ? <SignUp /> : <SignIn />}
    </div>
  );
};

export default HomePage;

// This is the main page of your application. It imports and displays the SignUp and SignIn components.
// You can customize the layout and styling as needed.
// The components are displayed side by side using flexbox.
// You can also add more features or components to this page as your application grows.
// Make sure to adjust the import paths based on your project structure.
// This is a simple example to get you started. You can enhance the UI and functionality as needed.
// You can also add routing or navigation to other parts of your application.
// Don't forget to test the sign-up and sign-in functionalities to ensure they work as expected.
// You can also add error handling and loading states for better user experience.
// If you have any questions or need further assistance, feel free to ask.
// This is a simple example to get you started. You can enhance the UI and functionality as needed.
// You can also add routing or navigation to other parts of your application.
// Don't forget to test the sign-up and sign-in functionalities to ensure they work as expected.
// You can also add error handling and loading states for better user experience.
// If you have any questions or need further assistance, feel free to ask.