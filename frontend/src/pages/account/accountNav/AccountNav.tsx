import { NavLink } from "react-router-dom";
import "./accountNav.css"

const LINKS = [
    {
        text: "Аккаунт",
        link: "user"
    },
    {
        text: "Команда",
        link: "team"
    }
]


const AccountNav = () => {
  return (
    <nav className="account__nav">
        <ul className="account__list">
    {LINKS.map((link) => {
          return (
                <li className="account__item" key={link.text}>
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
                    {link.text}
                </NavLink>
                </li>
            );
        })}
        </ul>
    </nav>
  )
}

export default AccountNav