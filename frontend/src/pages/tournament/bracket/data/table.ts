import { TGame, TTable, TTableCol, TTableNode } from "../types"

const Game1: TGame = {
    team1: 'Speramjka 123',
    team2: 'team2 123',
    score1: 0,
    score2: 13,
}

const Game2: TGame = {
    team1: 'Speramjka 123',
    team2: 'team2 123',
    score1: 0,
    score2: 13,
}

const GameNode1:TTableNode = {
    id: 1,
    firstPrevMatch: undefined,
    secondPrevMatch: undefined,
    nextMatch: undefined,
    firstMatch: Game1,
    secondMatch: Game2,
}

const GameNode2:TTableNode = {
    id: 1,
    firstPrevMatch: undefined,
    secondPrevMatch: undefined,
    nextMatch: undefined,
    firstMatch: Game1,
    secondMatch: Game2,
}

const GameNode3:TTableNode = {
    id: 1,
    firstPrevMatch: GameNode1,
    secondPrevMatch: GameNode2,
    nextMatch: undefined,
    firstMatch: Game1,
    secondMatch: Game2,
}


const GameCols: TTableCol[] = [
    {
        id: 1,
        games: [GameNode1, GameNode2],
        gap: 0,
    }, 
    {
        id: 2,
        games: [GameNode3],
        gap: 1,
    }
]

export const Table: TTable = {
    column: GameCols,
}