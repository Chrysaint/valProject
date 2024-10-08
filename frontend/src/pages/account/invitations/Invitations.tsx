import React from "react";
import "./invitations.css";

type Props = {};

const Invitations = (props: Props) => {
  return (
    <section className="invites-block">
      <ul className="invites__list">
        <li className="invites__item">
          <p className="invites__item__name">Something</p>
          <div className="invites__item__actions">
            <button data-type="accept" className="invites__item__btn">
              <img
                className="invites__item__btn-img"
                src="../src/assets/icons/menu/check.svg"
                alt="accept"
              />
            </button>
            <button data-type="decline" className="invites__item__btn">
              <img
                className="invites__item__btn-img"
                src="../src/assets/icons/menu/cross.svg"
                alt="decline"
              />
            </button>
          </div>
        </li>
        <li className="invites__item">
          <p className="invites__item__name">Something</p>
          <div className="invites__item__actions">
            <button data-type="accept" className="invites__item__btn">
              <img
                className="invites__item__btn-img"
                src="../src/assets/icons/menu/check.svg"
                alt="accept"
              />
            </button>
            <button data-type="decline" className="invites__item__btn">
              <img
                className="invites__item__btn-img"
                src="../src/assets/icons/menu/cross.svg"
                alt="decline"
              />
            </button>
          </div>
        </li>
        <li className="invites__item">
          <p className="invites__item__name">Something</p>
          <div className="invites__item__actions">
            <button data-type="accept" className="invites__item__btn">
              <img
                className="invites__item__btn-img"
                src="../src/assets/icons/menu/check.svg"
                alt="accept"
              />
            </button>
            <button data-type="decline" className="invites__item__btn">
              <img
                className="invites__item__btn-img"
                src="../src/assets/icons/menu/cross.svg"
                alt="decline"
              />
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Invitations;
