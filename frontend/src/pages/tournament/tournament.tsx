import { Outlet, Route, Routes } from "react-router-dom";
import TournamentNav from "./tournamentNav/tournamentNav";
import './tournament.css'
import TournamentTeams from "./tournamentTeams/tournamentTeams";
import TournamentResults from "./tournamentResults/tournamentResults";
import TournamentRules from "./tournamentRules/tournamentRules";
import Bracket from "./bracket/Bracket";
import { BracketType } from "./bracket/types";

function Tournament () {
    return (
        <section className="outer-wrapper tournament-table">
            <h2 className="page_title page_title_centered">Турнирная таблица</h2>
            <TournamentNav />
            <Outlet />
            {/* <Routes> */}
                {/* <Route path='/upper-bracket' element={<Bracket type={BracketType.upperBracket} />}/>
                <Route path='/lower-bracket' element={<Bracket type={BracketType.lowerBracket} />}/>
                <Route path='/teams' element={<TournamentTeams />}/>
                <Route path='/results' element={<TournamentResults />}/>
                <Route path='/rules' element={<TournamentRules />}/> */}
            {/* </Routes> */}
        </section>
    )
}

export default Tournament;