import { useEffect, useState } from "react";

import './tournamentTeams.css'
import TournamentTeamRow, { TTeam } from "../../../components/torunament/tournamentTeamRow/TournamentTeamRow";


type TTeamPlayer = {
  nickname: string,
  url: string
}



function TournamentTeams() {
  
    const [searchText, setSearchText] = useState("");
    const [teams, setTeams] = useState<TTeam[]>([
      {
        name: "Team 1",
      },
      {
        name: "Team 2",
      },
      {
        name: "Team 3",
      },

    ]);
    const [filteredTeams, setFilteredTeams] = useState<TTeam[]>([]);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value);
    }

    useEffect(() => {
      const filtered = teams.filter((team) => team.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredTeams(filtered);      
    }, [teams, searchText])

    return (
    <div className="teams tournament-wrapper_narrow">
      <div className="teams__search">
        <h3 className="teams__search__header">Найти команду</h3>
        <input type="text" className="teams__search__input" placeholder="Команда" value={searchText} onChange={handleSearch}/>
      </div>
      {
        filteredTeams.length > 0 && searchText != "" ? (
          <div className="teams__filtered">
            <h4>Найденные команды</h4>
            <div className="teams__wrapper">
              <ul className="teams__list">
                {filteredTeams.map((team) => <TournamentTeamRow key={team.name} team={team} />)}
              </ul>
            </div>
          </div>
        ) : null
      }
      <div className="teams__basic">
        <h3>Список команд</h3>
        <div className="teams__wrapper">
        <ul className="teams__list">
          {teams.map((team) => <TournamentTeamRow key={team.name} team={team} />)}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default TournamentTeams;