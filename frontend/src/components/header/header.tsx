import { Link } from 'react-router-dom'
import './header.css'

const LINKS = [
    {
        title: 'Турнир',
        href: '/tournament',
        status: "active"
    },
    {
        title: 'Команда',
        href: '/team',
        status: "inactive"
    },
    {
        title: 'Аккаунт',
        href: '/account',
        status: "inactive"
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
                            <li key={link.title} className={`header__item nav_underline ${link.status}`}>
                                <Link to={link.href} className="header__link">
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}