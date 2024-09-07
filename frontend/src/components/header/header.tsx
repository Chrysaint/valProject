import { NavLink } from 'react-router-dom'
import './header.css'

const LINKS = [
    {
        title: 'Турнир',
        href: 'tournament',
    },
    {
        title: 'Команда',
        href: 'team',
    },
    {
        title: 'Аккаунт',
        href: 'account',
    }
]

export const Header = () => {
    return (
        <header className="outer-wrapper header">
            <h1><a href="/" className="header__logo">Valorant <span className="header__logo_white">ladder</span></a></h1>
            <nav className="header__nav">
                <ul className="header__list">
                    {LINKS.map(link => {
                        return (
                            <li key={link.title} className={`header__item `}>
                                <NavLink to={link.href}
                                className={({ isActive, isPending, isTransitioning }) =>
                                    isPending ? "" : isActive ? " header__link nav_underline active" : isTransitioning ? " header__link nav_underline active" : "header__link nav_underline inactive"
                                  }
                                ></NavLink>
                                <p className="header__link-text">
                                    {link.title}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}