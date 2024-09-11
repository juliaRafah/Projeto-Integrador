/*
  Warnings:

  - Added the required column `developer` to the `game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distributor` to the `game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `game` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "imageURL" TEXT,
    "description" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "distributor" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "created_ad" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_ad" DATETIME NOT NULL
);
INSERT INTO "new_game" ("created_ad", "description", "gender", "id", "imageURL", "link", "name", "updated_ad") SELECT "created_ad", "description", "gender", "id", "imageURL", "link", "name", "updated_ad" FROM "game";
DROP TABLE "game";
ALTER TABLE "new_game" RENAME TO "game";
CREATE UNIQUE INDEX "game_id_key" ON "game"("id");
CREATE UNIQUE INDEX "game_link_key" ON "game"("link");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
