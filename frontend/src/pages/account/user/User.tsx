import { useState } from "react";
import "./user.css";
type Props = {};

const User = (props: Props) => {
  const [modalOpened, setModalOpened] = useState(0);

  return (
    <div className="user__wrapper">
      {modalOpened ? (
        <div className="modal">
          <div className="modal__wrapper">
            <button
              className="modal__exit-button"
              onClick={() => setModalOpened(0)}
            >
              <img src="../src/assets/icons/menu/cross.svg" alt="close" />
            </button>
            <label htmlFor="upload-file" className="upload-file-label"></label>
            <input
              type="file"
              id="upload-file"
              accept="image/*"
              onChange={(e) => console.log(e.target)}
            />
            <div className="modal__actions">
              <button id="modal-submit" className="modal__button">
                Изменить<span>Выбранный файл: huh</span>
              </button>
              <button className="modal__button">Отмена</button>
            </div>
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
