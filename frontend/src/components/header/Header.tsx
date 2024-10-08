import { NavLink } from 'react-router-dom'
import './header.css'
import { getCookie } from '../../api/cookie/getCookie'
import { useState } from 'react'

const LINKS = [
    {
        title: 'Турнир',
        href: 'tournament',
        loggedIn: 1,
    },
    {
        title: 'Команда',
        href: 'team',
        loggedIn: 1,
    },
    {
        title: 'Аккаунт',
        href: 'account',
        loggedIn: 1,
    },
    {
        title: 'Авторизация',
        href: 'signin',
        loggedIn: 0,
    },
    {
        title: 'Регистрация',
        href: 'signup',
        loggedIn: 0,
    }
]

function getValidLinks(isLoggedIn: number) {
    if (!isLoggedIn) isLoggedIn = 0
    const links = LINKS.filter(link => link.loggedIn === isLoggedIn);
    return links;
}

export const Header = () => {
    const isLoggedIn = Number(getCookie("user"))
    const links = getValidLinks(isLoggedIn)
    console.log(isLoggedIn, links);
    return (
        <header className="outer-wrapper header">
            <h1><a href="/" className="header__logo">Valorant <span className="header__logo_white">ladder</span></a></h1>
            <nav className="header__nav">
                <ul className="header__list">
                    {links.map(link => {                        
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