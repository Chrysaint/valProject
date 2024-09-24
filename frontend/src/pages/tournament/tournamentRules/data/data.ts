import { TPrizeCard } from "../../../../components/torunament/tournamentPrize/PrizeCard";

type BannedRuleCard = {
  name: string;
  role: string;
  image: string;
};

type BannedMapCard = {
  name: string;
  image: string;
};

export const Prizes: TPrizeCard[] = [
  {
    id: 2,
    place: "2 место",
    img: "./../src/assets/icons/medals/silver-medal.svg",
    prize: "1 500 ",
    alt: "Медаль",
  },
  {
    id: 1,
    place: "1 место",
    img: "./../src/assets/icons/medals/golden-medal.svg",
    prize: "3 000 ",
    alt: "Медаль",
  },
  {
    id: 3,
    place: "3 место",
    img: "./../src/assets/icons/medals/bronze-medal.svg",
    prize: "500 ",
    alt: "Медаль",
  },
];

export const bannedHeroes: BannedRuleCard[] = [
  {
    name: "Chamber",
    role: "Страж",
    image: "",
  },
  {
    name: "Cypher",
    role: "Страж",
    image: "",
  },
  {
    name: "KillJoy",
    role: "Страж",
    image: "",
  },
  {
    name: "Sage",
    role: "Страж",
    image: "Support",
  },
  {
    name: "Deadlock",
    role: "Страж",
    image: "Support",
  },
  {
    name: "Iso",
    role: "Дуэлянт",
    image: "",
  },
];

export const BannedGuns: BannedRuleCard[] = [
  {
    name: "Operator",
    role: "Снайперская винтовка",
    image: "",
  },
  {
    name: "Outlaw",
    role: "Снайперская винтовка",
    image: "",
  },
  {
    name: "Odin",
    role: "Пулемет",
    image: "",
  },
  {
    name: "Judge",
    role: "Дробовик",
    image: "",
  },
];
