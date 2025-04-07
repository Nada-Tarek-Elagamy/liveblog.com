import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Welcome to the Live Blog</h1>
        {/* Choose which component to render */}
        <SignUp />  {/* Render SignUp component */}
        {/* <SignIn />  Uncomment to render SignIn component */}
      </main>
    </div>
  );
}
