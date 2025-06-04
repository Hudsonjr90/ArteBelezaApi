/*
  Warnings:

  - You are about to drop the column `booked` on the `AvailableSlot` table. All the data in the column will be lost.
  - You are about to drop the column `dateTime` on the `AvailableSlot` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `Barber` table. All the data in the column will be lost.
  - You are about to drop the column `favoriteBarberId` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `AvailableSlot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Barber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "AvailableSlot" DROP COLUMN "booked",
DROP COLUMN "dateTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isBooked" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Barber" DROP COLUMN "bio",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "favoriteBarberId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "favoriteId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_favoriteId_fkey" FOREIGN KEY ("favoriteId") REFERENCES "Barber"("id") ON DELETE SET NULL ON UPDATE CASCADE;
