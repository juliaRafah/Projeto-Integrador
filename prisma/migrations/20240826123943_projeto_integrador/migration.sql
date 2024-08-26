-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "document" TEXT,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_ad" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_ad" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "imageURL" TEXT,
    "description" TEXT NOT NULL,
    "created_ad" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_ad" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "assessment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "note" TEXT NOT NULL,
    "comment" TEXT,
    "created_ad" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_ad" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "game_id_key" ON "game"("id");

-- CreateIndex
CREATE UNIQUE INDEX "game_link_key" ON "game"("link");

-- CreateIndex
CREATE UNIQUE INDEX "assessment_id_key" ON "assessment"("id");
