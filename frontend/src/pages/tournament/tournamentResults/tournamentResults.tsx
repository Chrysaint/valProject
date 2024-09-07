import { useState } from "react";
import { TTeam } from "../../../components/torunament/tournamentTeamRow/TournamentTeamRow";

import './tournamentResults.css'


type TTeamPlacement = {
  team: TTeam,
  place: number
}

function getTeamPlacement(teams: TTeamPlacement[], name: string) : string {
  const team = teams.find(t => t.team.name === name);
  let res = "-ое";
  if (team?.place == 3) res = "-ее"
  return res
}

function TournamentResults() {
    const [teams, setTeams] = useState<TTeamPlacement[]>([
      {
        team: {
          name: "Team 1",
        },
        place: 1
      },
      {
        team: {
          name: "Team 2",
        },
        place: 2
      },
      {
        team: {
          name: "Team 3",
        },
        place: 3
      },
      {
        team: {
          name: "Team 4",
        },
        place: 4
      }
    ])
  return (
    <div className="tournament-wrapper_narrow">
      <div className="tournament-results__wrapper">
        <ul className="results__list">
          {teams.map((team, index) => {
            return(
             <li key={index} className="results__item teams__item">
               <p className="teams__name">{team.team.name}</p>
               <p className={`teams__place ${team.place === 1 ? "golden" : team.place === 2 ? "silver" : team.place === 3 ? "bronze" : null}`}>{team.place}{getTeamPlacement(teams, team.team.name)}</p>
             </li>
           )
          })}
        </ul>
      </div>
    </div>
  );

}

export default TournamentResults;