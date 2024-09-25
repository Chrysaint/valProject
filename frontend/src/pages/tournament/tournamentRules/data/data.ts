import { TPrizeCard } from "../../../../components/torunament/tournamentPrize/PrizeCard";

type BannedCardTypes = "character" | "map" | "gun";
export type BannedRuleCard = {
  type: BannedCardTypes;
  name: string;
  role?: string;
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
    type: "character",
    name: "Chamber",
    role: "Страж",
    image: "./../src/assets/ban-cards/characters/chamber.png",
  },
  {
    type: "character",
    name: "Cypher",
    role: "Страж",
    image: "./../src/assets/ban-cards/characters/cypher.png",
  },
  {
    type: "character",
    name: "KillJoy",
    role: "Страж",
    image: "./../src/assets/ban-cards/characters/killjoy.png",
  },
  {
    type: "character",
    name: "Sage",
    role: "Страж",
    image: "./../src/assets/ban-cards/characters/sage.png",
  },
  {
    type: "character",
    name: "Deadlock",
    role: "Страж",
    image: "./../src/assets/ban-cards/characters/deadlock.webp",
  },
  {
    type: "character",
    name: "Iso",
    role: "Дуэлянт",
    image: "./../src/assets/ban-cards/characters/iso.webp",
  },
];

export const bannedGuns: BannedRuleCard[] = [
  {
    type: "gun",
    name: "Operator",
    role: "Снайперская винтовка",
    image: "./../src/assets/ban-cards/guns/Operator.webp",
  },
  {
    type: "gun",
    name: "Outlaw",
    role: "Снайперская винтовка",
    image: "./../src/assets/ban-cards/guns/Outlaw.webp",
  },
  {
    type: "gun",
    name: "Odin",
    role: "Пулемет",
    image: "./../src/assets/ban-cards/guns/Odin.webp",
  },
  {
    type: "gun",
    name: "Judge",
    role: "Дробовик",
    image: "./../src/assets/ban-cards/guns/Judge.webp",
  },
];

export const bannedMaps: BannedRuleCard[] = [
  {
    type: "map",
    name: "Fracture",
    image: "./../src/assets/ban-cards/maps/fracture.webp",
  },
  {
    type: "map",
    name: "Haven",
    image: "./../src/assets/ban-cards/maps/haven.webp",
  },
  {
    type: "map",
    name: "Lotus",
    image: "./../src/assets/ban-cards/maps/lotus.webp",
  },
];
