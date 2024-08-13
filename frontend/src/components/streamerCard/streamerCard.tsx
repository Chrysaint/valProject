import { StreamerCardProps, StreamerCardStyle } from "./streamerCardTypes";
import './streamerCard.css'

function StreamerCard(props: StreamerCardProps) {
    const img = `./src/assets/avatars/${props.icon}`
    return (
        <div className="streamer-card">
            <div className="streamer-card__logo">
                <img src={img} alt={props.icon} />
            </div>
            <div className="streamer-card__info">
                <p className={`streamer-card__info-name ${props.style === StreamerCardStyle.strokeText ? "stroke_font" : null}`}>{props.streamer}</p>
                <a href={`https://www.${props.link}`} target="_blank" className="streamer-card__info-link">{props.link}</a>
            </div>
        </div>
    )
}

export default StreamerCard;