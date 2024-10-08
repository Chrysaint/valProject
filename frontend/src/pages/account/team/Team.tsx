import TeamMember from "../../../components/teamMember/TeamMember";
import "./team.css";

const members = ["Chrysaint", "Chrysaint", "Chrysaint"];

const Team = () => {
  return (
    <div className="team__wrapper">
      <ul className="team__list">
        {members.map((member) => (
          <TeamMember key={member} />
        ))}
      </ul>
    </div>
  );
};

export default Team;
