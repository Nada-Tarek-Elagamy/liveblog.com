"use client";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Live Blog</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <SignUp />
        <SignIn />
      </div>
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