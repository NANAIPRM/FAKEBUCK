import CreateNewAccount from "../features/auth/components/CreateNewAccount";
export default function Modal() {
  return (
    <div>
      <div className="fixed inset-0 bg-white opacity-70 z-10 "></div>
      <CreateNewAccount />
    </div>
  );
}
