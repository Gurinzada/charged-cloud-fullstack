-- CreateTable
CREATE TABLE `Comapnies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NULL,
    `userid` INTEGER NOT NULL,

    UNIQUE INDEX `Comapnies_email_key`(`email`),
    UNIQUE INDEX `Comapnies_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comapnies` ADD CONSTRAINT `Comapnies_userid_fkey` FOREIGN KEY (`userid`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
