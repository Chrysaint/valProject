import { useState } from 'react';
import './../authForm.css'

const SignUp = () => {
    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [valNickNameInput, setValNickNameInput] = useState("");
    const [valTagInput, setValTagInput] = useState("");
    const [contactInput, setContactInput] = useState("");
  return (
    <div className="auth-block">
      <h2 className="auth-title"> Регистрация </h2>
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
        <div className="auth-form__block">
          <label className="auth-label">
            Электронная Почта
          </label>
          <input className="auth-input" type="text" onChange={e => setEmailInput(e.target.value)} value={emailInput} />
        </div>
        <div className="auth-form__block">
          <label className="auth-label">
            Riot Nickname
          </label>
          <input className="auth-input" type="text" onChange={e => setValNickNameInput(e.target.value)} value={valNickNameInput} />
        </div>
        <div className="auth-form__block">
          <label className="auth-label">
            Riot Tag
          </label>
          <input className="auth-input" type="text" onChange={e => setValTagInput(e.target.value)} value={valTagInput} />
        </div>
        <div className="auth-form__block">
          <label className="auth-label">
            Discord ID
          </label>
          <input className="auth-input" type="text" onChange={e => setContactInput(e.target.value)} value={contactInput} />
        </div>
        <button className="default_btn">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default SignUp;