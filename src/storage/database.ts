import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("kickstats.db");

// Create tables if they don't exist
export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS players (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      jerseyNumber INTEGER NOT NULL,
      position TEXT NOT NULL,
      createdAt TEXT NOT NULL
    );
  `);
}
