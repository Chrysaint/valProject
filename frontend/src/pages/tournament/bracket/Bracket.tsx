import { useState } from "react";
import TournamentTable from "../../../components/torunament/tournamentTable/TournamentTable.tsx";
import "./Bracket.css";
import { header_titles } from "./data/header_data.ts";
import { Table } from "./data/table.ts";
import { BracketType } from "./types.ts";

type Props = {
  type: BracketType;
};

function UpperBracket(props: Props) {
  const colWidth = 240;
  const gap = -88;
  const [bracketPos, setBracketPos] = useState(0);
  function slideBracket(step: number) {
    console.log(step, bracketPos)
    const bracketWidth = document.querySelector(".bracket")?.clientWidth;
    const bracketWrapperWidth = document.querySelector('.bracket__wrapper')?.clientWidth;
    if (!bracketWrapperWidth || !bracketWidth) return;
    const widthDiff = bracketWrapperWidth - bracketWidth;
    console.log("step sum: ", step+bracketPos)
    const newPos = step + gap + bracketPos;
    if (newPos > 0) {
      setBracketPos(-widthDiff + step - gap + colWidth);
    } else if (newPos < -widthDiff) {
      setBracketPos(0);
    } else setBracketPos(newPos)
  }
  console.log(props.type);
  return (
    <div className="bracket">
      <button onClick={() => slideBracket(colWidth)} className="bracket__headers__arrow bracket__headers__arrow_left">
        <img
          src="./../../src/assets/icons/arrows/arrow-left.svg"
          alt="arrow-left"
        />
      </button>
      <div className="bracket__wrapper" style={{
        transform: `translateX(${bracketPos}px)`
      }}>
        <div className="bracket__nav">
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
        </div>
        <TournamentTable table={Table} />
      </div>
      <button onClick={() => slideBracket(-colWidth)} className="bracket__headers__arrow bracket__headers__arrow_right">
        <img
          src="./../../src/assets/icons/arrows/arrow-right.svg"
          alt="arrow-left"
        />
      </button>
    </div>
  );
}

export default UpperBracket;
