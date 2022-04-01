/*
  Warnings:

  - You are about to alter the column `balanceAmount` on the `reservation` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `roomPrice` on the `room` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `price` on the `roomtype` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `amountTransation` on the `transation` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `reservation` MODIFY `balanceAmount` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `room` MODIFY `roomPrice` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `roomtype` MODIFY `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `transation` MODIFY `amountTransation` DOUBLE NOT NULL;
