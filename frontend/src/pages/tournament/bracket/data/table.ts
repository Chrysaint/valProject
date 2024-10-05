import { TGame, TTable, TTableCol, TTableColGaps, TTableNode } from "../types"

type GameNode = {
    id: number;
    nextLeft: GameNode;
    nextRight: GameNode;
    prevNode: GameNode | null;
    firstMatch: TGame;
    secondMatch: TGame;
} | null;

// function generateTableMock(stages: number): TTable {
//     const table: TTable;
//     const game: TGame = {
//         team1: "",
//         team2: "",
//         score1: 0,
//         score2: 0
//     };
//     const game2: TGame = {
//         team1: "",
//         team2: "",
//         score1: 0,
//         score2: 0
//     };
//     const tempGame: TGame;
//     const prevNode: GameNode = null;
//     const nextRightNode: GameNode;
//     const nextLeftNode: GameNode;
//     const currNode: GameNode;
//     const column: TTableCol;
//     let gap: TTableColGaps;
//     const iterator = Math.pow(2, stages);
//     for (let i = 0; i < iterator; i++) {
//         game.score1 = 0;
//         game.score2 = 0;
//         game.team1 = `Team ${i}`;
//         game.team2 = `Team ${i}`;
//         game2.score1 = 0;
//         game2.score2 = 0;
//         game2.team1 = `Team ${i}`;
//         game2.team2 = `Team ${i}`;
//         currNode.firstMatch = game;
//         currNode.secondMatch = game2;
//         currNode.prevNode = prevNode;
//         currNode?.nextLeft = 

//     }
//     return table;
// }
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
    },
    {
        id: 1,
        games: [GameNode1, GameNode2],
        gap: 0,
    }, 
    {
        id: 2,
        games: [GameNode3],
        gap: 1,
    },
    {
        id: 1,
        games: [GameNode1, GameNode2],
        gap: 0,
    }, 
    {
        id: 2,
        games: [GameNode3],
        gap: 1,
    },
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