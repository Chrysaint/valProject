import { useParams } from "react-router-dom";
import "./tournamentGame.css";

type Props = {};

const TournamentGame = (props: Props) => {
  const { id } = useParams();
  return (
    <div className="tournament-game__wrapper">
      <h2>Game: #{id}</h2>
      <div className="tournament-game__content">
        <div className="tournament-game__team">
          <h3 className="tournament-game__team__header">Team1</h3>
          <ul className="tournament-game__team__list">
            <li className="tournament-game__team__item">
              <img src="../../../src/assets/icons/user/crown.svg" alt="" />
              <p className="tournament-game__team__item-player">Seneas</p>
            </li>
            <li className="tournament-game__team__item">
              <img src="../../../src/assets/icons/user/user.svg" alt="" />
              <p className="tournament-game__team__item-player">Seneas</p>
            </li>
          </ul>
          <p className="tournament-game__team-ready">Готовность</p>
        </div>
        <div className="tournament-game__team">
          <h3 className="tournament-game__team__header">Team1</h3>
          <ul className="tournament-game__team__list">
            <li className="tournament-game__team__item">
              <img src="../../../src/assets/icons/user/crown.svg" alt="" />
              <p className="tournament-game__team__item-player">Seneas</p>
            </li>
            <li
              style={{
                justifyContent: "flex-start",
                flexDirection: "row-reverse",
              }}
              className="tournament-game__team__item"
            >
              <img src="../../../src/assets/icons/user/user.svg" alt="" />
              <p className="tournament-game__team__item-player">Seneas</p>
            </li>
          </ul>
          <p className="tournament-game__team-ready">Готовность</p>
        </div>
      </div>
    </div>
  );
};

export default TournamentGame;
