import "./TournamentBannedCard.css";

type Props = {
  title: string;
  role: string;
  img: string;
};

const TournamentBannedCard = (props: Props) => {
  return (
    <div className="prize-card">
      <img src={props.img} alt={props.title} className="banned-card__img" />
      <p className="banned-card__title">{props.title}</p>
      <p className="banned-card__role">{props.role}</p>
    </div>
  );
};

export default TournamentBannedCard;
