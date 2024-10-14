import { useState } from "react";
import "./teamMember.css";
import { TTeamMember } from "./types";

type Props = {
  data: TTeamMember;
};

const TeamMember = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(0);

  return (
    <li className="team__item">
      <div className="team__item_left">
        <img
          src={`../src/assets/icons/user/${
            props.data.role === "leader"
              ? "crown"
              : props.data.role === "participant"
              ? "user"
              : "dot"
          }.svg`}
          alt={props.data.role}
          className="team__item__icon"
        />
        <span className="team__item__username">{props.data.nickname}</span>
      </div>
      <div className="team__item_right">
        <button
          onClick={() => setModalVisible(modalVisible ? 0 : 1)}
          className="team__item__actions"
        >
          <img src="../src/assets/icons/menu/meatballs_menu.svg" alt="" />
        </button>
        <ul data-state={`${modalVisible}`} className="team__item__action-list">
          <li className="team__item__action-item">Выгнать из команды</li>
          <li className="team__item__action-item">Выгнать из команды</li>
          <li className="team__item__action-item">Выгнать из команды</li>
        </ul>
      </div>
    </li>
  );
};

export default TeamMember;
