import { NavLink } from "react-router-dom";
import { getCookie } from "../../api/cookie/getCookie";
import StreamerCard from "../../components/streamerCard/StreamerCard";
import { StreamerCardStyle } from "../../components/streamerCard/streamerCardTypes";
import './index.css'

function Index () {

    const isLoggedIn: number = Number(getCookie("user"))

    return (
        <section className="inner-wrapper hero">
            <div className="hero__info">
                <div className="hero__info__top">
                    <h2 className="hero__title">Hwrd <span className="white">x</span> <span className="stroke_font">lsds</span></h2>
                    <p className="hero__text">
                        Призовой фонд 5000 рублей. <br />
                        Участие 32-х команд. <br />
                        Участники команды: 2 + 1 запасной <br /> <br />
                        Дата начала турнира: 7 сентября <br />
                        Дата окончания: 9 сентября. <br /> <br />
                        Успей зарегистрировать свою команду.
                    </p>
                    <NavLink to={isLoggedIn ? "account" : "signup"}
                                className="default_btn"
                                >
                    {isLoggedIn ? "Аккаунт" : "Принять участие"}
                    </NavLink>
                </div>
                <div className="hero__info__bot">
                    <StreamerCard streamer="Howard" link="twitch.tv/howardtm" style={StreamerCardStyle.strokeText} icon="howard_avatar.png"/>
                    <StreamerCard streamer="Lisadess" link="twitch.tv/lisadess" style={StreamerCardStyle.normalText} icon="lisadess_avatar.png"/>
                </div>
            </div>
            <div className="hero__img">
                <img src="./src/assets/random/hero_img.png" alt="hero"/>
            </div>
        </section>
    )
}

export default Index;