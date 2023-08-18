-- CreateTable
CREATE TABLE "registrations" (
    "pk" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registrations_pkey" PRIMARY KEY ("pk")
);

-- CreateIndex
CREATE UNIQUE INDEX "registrations_id_key" ON "registrations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "registrations_pk_id_key" ON "registrations"("pk", "id");
