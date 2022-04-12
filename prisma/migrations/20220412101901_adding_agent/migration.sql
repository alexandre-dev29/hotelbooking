-- CreateTable
CREATE TABLE `Agents`
(
  `agentId`          VARCHAR(191) NOT NULL,
  `agentName`        VARCHAR(191) NOT NULL,
  `agentPhoneNumber` VARCHAR(191) NOT NULL,
  `hotelId`          VARCHAR(191) NOT NULL,
  `roleId`           VARCHAR(191) NOT NULL,
  `createdAt`        DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP (3),
  `updatedAt`        DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP (3),
  `roleRoleId`       VARCHAR(191) NULL,
  `hotelHotelId`     VARCHAR(191) NULL,

  PRIMARY KEY (`agentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Agents`
  ADD CONSTRAINT `Agents_roleRoleId_fkey` FOREIGN KEY (`roleRoleId`) REFERENCES `Role` (`roleId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agents`
  ADD CONSTRAINT `Agents_hotelHotelId_fkey` FOREIGN KEY (`hotelHotelId`) REFERENCES `Hotel` (`hotelId`) ON DELETE SET NULL ON UPDATE CASCADE;
