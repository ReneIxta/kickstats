import { db } from "./database";
import { Player } from "../models";

export function getAllPlayers(): Player[] {
    const result = db.getAllSync<Player>("SELECT * FROM players ORDER BY jerseyNumber ASC");
    return result ?? [];
}

export function addPlayer(player: Player): void {
    db.runSync(
        `INSERT INTO players (id, name, jerseyNumber, position, createdAt)
        VALUES (?, ?, ?, ?, ?)`,
        [
        player.id,
        player.name,
        player.jerseyNumber,
        player.position,
        player.createdAt
        ]
    );
}
