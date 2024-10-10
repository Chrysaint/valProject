type User = {
  id: number;
  nickname: string;
  avatar?: string;
  email: string;
  valId: string;
  discordId: string;
};

type TPlayer = Omit<User, "email" | "valId" | "discordId">;

type TTeam = {
  id: number;
  teamName: string;
  players: TPlayer[];
};

type TGame = {
  id: number;
  data?: TTeam[];
};

type TTournamentNode = {
  id: number;
  data?: TGame[];
  leftNode?: TTournamentNode;
  rightNode?: TTournamentNode;
};
