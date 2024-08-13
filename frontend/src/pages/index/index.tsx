import StreamerCard from "../../components/streamerCard/streamerCard";
import { StreamerCardStyle } from "../../components/streamerCard/streamerCardTypes";
import './index.css'

function Index () {
    return (
        <section className="inner-wrapper hero">
            <div className="hero__info">
                <div className="hero__info__top">
                    <h2 className="hero__title">Hwrd <span className="white">x</span> <span className="hero__title_other stroke_font">lsds</span></h2>
                    <p className="hero__text">Призовой фонд 1000 рублей.</p>
                    <button className="default_btn">Регистрация</button>
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