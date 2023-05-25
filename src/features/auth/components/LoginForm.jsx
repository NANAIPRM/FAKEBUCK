import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <form action="">
      <div className="grid gap-4">
        <div>
          <LoginInput placeholder="Email address or phone number" />
        </div>
        <div>
          <LoginInput placeholder="Password" />
        </div>
        <div>
          <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl">
            Log in
          </button>
        </div>
      </div>
    </form>
  );
}
