import { TMemberRole } from "../../teamMember/types";
import "./tournamentGameTeam.css";

type TPlayer = {
  nickname: string;
  avatar: string;
  ready: boolean;
  role: TMemberRole;
};

export type TTeam = {
  name: string;
  players: TPlayer[];
};

type Props = {
  data: TTeam;
};

const TournamentGameTeam = (props: Props) => {
  return (
    <div className="tournament-game__team">
      <h3 className="tournament-game__team__header">{props.data.name}</h3>
      <ul className="tournament-game__team__list">
        {props.data.players.map((player) => (
          <li className="tournament-game__team__item">
            <div className="team__item_left">
              <img
                src={`../../../src/assets/icons/user/${
                  player.role === "leader" ? "crown" : "user"
                }.svg`}
                alt=""
              />
              <p className="tournament-game__team__item-player">
                {player.nickname}
              </p>
            </div>
            <p className="team__item__ready">
              {player.ready ? "Готов" : "Не готов"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentGameTeam;
