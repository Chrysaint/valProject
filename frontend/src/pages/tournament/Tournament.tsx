import { Outlet } from "react-router-dom";
import TournamentNav from "./tournamentNav/TournamentNav";
import "./tournament.css";

function Tournament() {
  return (
    <section className="outer-wrapper tournament-table">
      <h2 className="page_title page_title_centered">Турнирная таблица</h2>
      <TournamentNav />
      <Outlet />
    </section>
  );
}

export default Tournament;
