/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `game` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "game_link_key";

-- CreateIndex
CREATE UNIQUE INDEX "game_name_key" ON "game"("name");
