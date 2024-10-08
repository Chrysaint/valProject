import { useState } from "react";
import "./user.css";
type Props = {};

const User = (props: Props) => {
  const [modalOpened, setModalOpened] = useState(0);

  return (
    <div className="user__wrapper">
      {modalOpened ? (
        <div className="modal" onClick={() => setModalOpened(0)}>
          <div className="modal__wrapper">
            <button className="modal__button" onClick={() => setModalOpened(0)}>
              <img src="../src/assets/icons/menu/cross.svg" alt="close" />
            </button>
            <label htmlFor="upload-file" className="upload-file-label"></label>
            <input type="file" id="upload-file" />
          </div>
        </div>
      ) : null}
      <div className="user__left">
        <div className="user__img">
          <img src="../src/assets/avatars/1.jpg" alt="" />
        </div>
        <button className="default_btn" onClick={() => setModalOpened(1)}>
          Изменить аватар
        </button>
        <button className="default_btn">Пригласить в команду</button>
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="user__right">
        <h2 className="user__nickname">Chrysaint</h2>
        <ul className="user__data">
          <li className="user__data-row">
            <span className="user__data__text_bold">Команда:</span>
            <span className="user__data__text">Нет</span>
          </li>
          <li className="user__data-row">
            <span className="user__data__text_bold">Valorant ID:</span>
            <span className="user__data__text">Smth#kzh</span>
          </li>
          <li className="user__data-row">
            <span className="user__data__text_bold">Discord:</span>
            <span className="user__data__text">Splanks</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
