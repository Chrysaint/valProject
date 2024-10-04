import { NavLink } from "react-router-dom";
import "./tournamentNav.css";

const LINKS = [
  {
    name: "Верхняя сетка",
    link: "upper-bracket",
  },
  {
    name: "Нижняя сетка",
    link: "lower-bracket",
  },
  {
    name: "Команды",
    link: "teams",
  },
  {
    name: "Результаты",
    link: "results",
  },
  {
    name: "Правила",
    link: "rules",
  },
];

function TournamentNav() {
  return (
    <nav className="tournament-table__nav">
      <ul className="tournament-table__nav-list">
        {LINKS.map((link) => {
          return (
            <li className="tournament-table__nav-item" key={link.name}>
              <NavLink
                to={link.link}
                className={({ isActive, isPending, isTransitioning }) =>
                  isPending
                    ? ""
                    : isActive
                      ? " tournament-table__nav-link active"
                      : isTransitioning
                        ? " tournament-table__nav-link"
                        : "tournament-table__nav-link"
                }
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TournamentNav;
