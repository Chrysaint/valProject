import "./prizeCard.css";

export type TPrizeCard = {
  id: number;
  place: string;
  img: string;
  prize: string;
  alt: string;
};

const PrizeCard = (props: TPrizeCard) => {
  return (
    <div
      className="glowing-card"
      data-place={props.id == 2 ? 2 : props.id == 3 ? 3 : null}
    >
      <p className="prize-card__place">{props.place}</p>
      <img src={props.img} alt={props.alt} className="prize-card__img" />
      <p className="prize-card__prize">
        <span className="prize-card__prize_accent"> {props.prize} </span> рублей
      </p>
    </div>
  );
};

export default PrizeCard;
