import LoginInput from "./LoginInput";
export default function CreateNewAccount() {
  return (
    <div className="fixed inset-0 z-30">
      <div className="flex justify-center items-center min-h-full p-4">
        <div className="bg-white shadow-[0_0_15px_rgb(0_0_0_/0.2)] max-w-lg w-full rounded-lg flex flex-col ">
          <div class="flex justify-center items-center p-4 border-b text-xl relative ">
            <h5 class="font-bold ">Sign Up</h5>
            <button class="text-gray-500 font-semibold absolute  right-5">
              ✕
            </button>
          </div>
          <div>
            <form action="">
              <div className="flex flex-col  items-center gap-4 p-4">
                <div className="flex gap-7">
                  <LoginInput placeholder="First name" />
                  <LoginInput placeholder="Last name" />
                </div>
                <div className="w-[90%]">
                  <LoginInput placeholder="Email address or phone number" />
                </div>
                <div className="w-[90%]">
                  <LoginInput placeholder="Password" />
                </div>
                <div className="w-[90%]">
                  <LoginInput placeholder="Confirm new password" />
                </div>
                <button className="bg-green-500 w-[40%] text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wide">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
