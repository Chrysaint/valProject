import TeamMember from "../../../components/teamMember/TeamMember";
import { MEMBERS } from "./data/mock";
import "./team.css";

const Team = () => {
  return (
    <div className="team__wrapper">
      <ul className="team__list">
        {MEMBERS.map((member) => (
          <TeamMember data={member} key={member.nickname} />
        ))}
      </ul>
      <div className="team__invite">
        <input
          placeholder="Пригласить в команду"
          type="text"
          className="teams__search__input"
        />
        <ul className="team__invite__list">
          <li className="team__invite__item">
            <p className="team__invite__name">smtj</p>
            <button className="team__invite__btn">Пригласить</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Team;
