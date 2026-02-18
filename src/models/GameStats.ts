export interface GameStats {
  id: string;
  gameId: string;
  playerId: string;

  goals: number;
  assists: number;
  shots: number;
  minutesPlayed: number;

  yellowCards: number;
  redCards: number;
}
