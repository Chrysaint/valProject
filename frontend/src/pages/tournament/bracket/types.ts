export type TTableColGaps = 0 | 1 | 2 | 3 | 4 | undefined

export type TTable = {
    column: TTableCol[]
}

export type TTableCol = {
    id: number,
    games: TTableNode[];
    gap: TTableColGaps
}

export type TTableNode = {
    id: number,
    nextMatch?: TTableNode,
    firstPrevMatch?: TTableNode,
    secondPrevMatch?: TTableNode,
    firstMatch: TGame,
    secondMatch: TGame,
}

export type TGame = {
    team1: string,
    team2: string,
    score1: number,
    score2: number,
}

export enum BracketType {
    lowerBracket = "lower",
    upperBracket = "upper"
}

export type TBracketType = BracketType.lowerBracket | BracketType.upperBracket