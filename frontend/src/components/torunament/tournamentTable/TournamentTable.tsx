import TournamentColumn from './TournamentColumn/TournamentColumn';
import './TournamentTable.css'
import { TTable } from '../../../pages/tournament/bracket/types';

type Props = {
    table: TTable,
}

function TournamentTable (props: Props) {
  return (
    <div className="bracket__table">
        {props.table.column.map((column, idx) => {
         return (
            <TournamentColumn key={idx} column={column} /> )}
         )
        }
    </div>
  )
}

export default TournamentTable