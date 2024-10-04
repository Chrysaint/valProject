import { useState } from "react";
import './../authForm.css'


const SignIn = () => {

  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="auth-block">
      <h2 className="auth-title"> Авторизация </h2>
      <form className="auth-form">
        <div className="auth-form__block">
        <label className="auth-label">
          Логин
        </label>
        <input className="auth-input" type="text" onChange={e => setLoginInput(e.target.value)} value={loginInput} />
        </div>
        <div className="auth-form__block">
          <label className="auth-label">
            Пароль
          </label>
          <input className="auth-input" type="text" onChange={e => setPasswordInput(e.target.value)} value={passwordInput} />
        </div>
        <button className="default_btn">Войти</button>
      </form>
    </div>
  );
};

export default SignIn;
