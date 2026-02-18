export interface Player {
  id: string;
  name: string;
  jerseyNumber: number;
  position: PlayerPosition;
  createdAt: string;
}

export type PlayerPosition =
  | "Goalkeeper"
  | "Defender"
  | "Midfielder"
  | "Forward";
