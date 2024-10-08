import { TTableCol } from '../../../../pages/tournament/bracket/types'
import './../tournamentTable.css'

type Props = {
    column: TTableCol,
}

const TEAMS_GAP = 36;
const GAMES_GAP = 48; 

const FIRST_COL_STYLE = `${GAMES_GAP}px`


const SECOND_COL_STYLE = `${GAMES_GAP * 3 + TEAMS_GAP}px`
console.log("second ", SECOND_COL_STYLE)


const THIRD_COL_STYLE = `${GAMES_GAP * 9 + TEAMS_GAP}px`
console.log("3rd ", THIRD_COL_STYLE)

const TournamentColumn = ({column}: Props) => {
  return (
    <div className="bracket__column">
        <ul className="bracket__column__games" style={{
            gap: `${column.gap == 0 ? FIRST_COL_STYLE : column.gap == 1 ? SECOND_COL_STYLE : column.gap == 2 ? THIRD_COL_STYLE : null}`
        }}>
        {column.games.map((game, index) => {
            return(
                <li key={index} className="bracket__column__game">
                    <div className="bracket__column__team">
                        <p className="bracket__team__name">{game.firstMatch.team1}</p>
                        <p className="bracket__team__score">{game.firstMatch.score1}</p>
                    </div>
                    <div className="bracket__column__team">
                        <p className="bracket__team__name">{game.secondMatch.team2}</p>
                        <p className="bracket__team__score">{game.secondMatch.score2}</p>
                    </div>
                </li>
            )
        })
        }
        </ul>
    </div>
  )
}

export default TournamentColumn