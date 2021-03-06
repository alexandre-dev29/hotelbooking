-- AlterTable
ALTER TABLE `user` ADD COLUMN `roleRoleId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Role` (
    `roleId` VARCHAR(191) NOT NULL,
    `userRole` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleRoleId_fkey` FOREIGN KEY (`roleRoleId`) REFERENCES `Role`(`roleId`) ON DELETE SET NULL ON UPDATE CASCADE;
