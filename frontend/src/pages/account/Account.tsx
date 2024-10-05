import { Outlet } from "react-router-dom";
import AccountNav from "./accountNav/AccountNav";

const Account = () => {

  return (
    <div className="account-wrapper inner-wrapper">
      <h2 className="account__name">Профиль</h2>
      <AccountNav />
      <Outlet />
    </div>
  )
}

export default Account;