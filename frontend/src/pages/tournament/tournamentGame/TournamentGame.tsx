import { useParams } from "react-router-dom";
import "./tournamentGame.css";
import TournamentGameTeam, {
  TTeam,
} from "../../../components/torunament/tournamentGameTeam/TournamentGameTeam";

const TEAM1: TTeam = {
  name: "Buzzlers",
  players: [
    {
      nickname: "lisadess",
      avatar: "ok.png",
      ready: false,
      role: "leader",
    },
    {
      nickname: "howard",
      avatar: "ok.png",
      ready: false,
      role: "participant",
    },
  ],
};

const TEAM2: TTeam = {
  name: "Semen",
  players: [
    {
      nickname: "lisadess",
      avatar: "ok.png",
      ready: true,
      role: "leader",
    },
    {
      nickname: "howard",
      avatar: "ok.png",
      ready: false,
      role: "participant",
    },
  ],
};

const TournamentGame = () => {
  const { id } = useParams();
  return (
    <div className="tournament-game__wrapper">
      <h2>Game: #{id}</h2>
      <div className="tournament-game__content">
        <TournamentGameTeam data={TEAM1} style="normal" />
        <TournamentGameTeam data={TEAM2} style="reversed" />
      </div>
      <button className="tournament__game__btn default_btn">Готов</button>
    </div>
  );
};

export default TournamentGame;
