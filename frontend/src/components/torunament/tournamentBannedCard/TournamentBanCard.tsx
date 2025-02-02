import { BannedRuleCard } from "../../../pages/tournament/tournamentRules/data/data";
import "./tournamentBanCard.css";

type Props = {
  card: BannedRuleCard;
};
const cardImgClasses = {
  map: "banned-card__img_map",
  character: "banned-card__img_character",
  gun: "banned-card__img_gun",
  prize: "banned-card__img_prize",
};
const TournamentBannedCard = (props: Props) => {
  return (
    <div className="glowing-card">
      <img
        src={props.card.image}
        alt={props.card.name}
        className={cardImgClasses[props.card.type]}
      />
      {/* </div> */}
      <p className="banned-card__title">{props.card.name}</p>
      {props.card.role ? (
        <p className="banned-card__role">{props.card.role}</p>
      ) : null}
    </div>
  );
};

export default TournamentBannedCard;
