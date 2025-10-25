/*
  Warnings:

  - You are about to drop the column `created_at` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `parent_id` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `roles` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `menuItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."menu_items" DROP CONSTRAINT "menu_items_parent_id_fkey";

-- DropIndex
DROP INDEX "public"."menu_items_path_key";

-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "created_at",
DROP COLUMN "isActive",
DROP COLUMN "order",
DROP COLUMN "parent_id",
DROP COLUMN "path",
DROP COLUMN "roles",
DROP COLUMN "updated_at",
ADD COLUMN     "key" TEXT NOT NULL DEFAULT 'undefined';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "address",
ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "public"."menuItem";
