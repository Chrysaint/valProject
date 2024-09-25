import TournamentTable from "../../../components/torunament/tournamentTable/TournamentTable.tsx";
import "./Bracket.css";
import { header_titles } from "./data/header_data.ts";
import { Table } from "./data/table.ts";
import { BracketType } from "./types.ts";

type Props = {
  type: BracketType;
};

function UpperBracket(props: Props) {
  console.log(props.type);
  return (
    <div className="bracket">
      <div className="bracket__nav">
        <button className="bracket__headers__arrow bracket__headers__arrow_left">
          <img
            src="./../../src/assets/icons/arrows/arrow-left.svg"
            alt="arrow-left"
          />
        </button>
        <div className="bracket__headers">
          {header_titles.map((header, index) => (
            <h3
              key={index}
              className={`bracket__column__name bracket__header__text_${header.font}`}
            >
              {header.title}
            </h3>
          ))}
        </div>
        <button className="bracket__headers__arrow bracket__headers__arrow_right">
          <img
            src="./../../src/assets/icons/arrows/arrow-right.svg"
            alt="arrow-left"
          />
        </button>
      </div>
      <TournamentTable table={Table} />
    </div>
  );
}

export default UpperBracket;
