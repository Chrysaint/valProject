export type TMemberRole = "leader" | "participant" | "stand-in";

export type TTeamMember = {
  nickname: string;
  role: TMemberRole;
};
