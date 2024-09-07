import TournamentTable from '../../../components/torunament/tournamentTable/TournamentTable.tsx'
import './Bracket.css'
import {header_titles} from './data/header_data.ts'
import { Table } from './data/table.ts';
import { BracketType } from './types.ts';

type Props = {
    type: BracketType
}

function UpperBracket(props: Props) {
    
    console.log(props.type)
    return (
        <div className="bracket">
            <div className="bracket__headers">
                {header_titles.map((header, index) => <h3 key={index} className={`bracket__column__name bracket__header__text_${header.font}`}>{header.title}</h3>)}
            </div>
            <TournamentTable table={Table} />
        </div>
    )
}

export default UpperBracket;