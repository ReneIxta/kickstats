export interface Game {
  id: string;
  date: string;        // ISO date string
  opponent: string;
  location?: string;
  createdAt: string;
}
