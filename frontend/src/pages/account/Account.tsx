import { Outlet } from "react-router-dom";
import AccountNav from "./accountNav/AccountNav";

const Account = () => {
  return (
    <div className="account-wrapper inner-wrapper">
      <AccountNav />
      <Outlet />
    </div>
  );
};

export default Account;
