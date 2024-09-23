import { PrismaClient, Firmware } from "@prisma/client";

const prisma = new PrismaClient();

export class FirmwareRepository {
  async create(data: Omit<Firmware, "id" | "createdAt">): Promise<Firmware> {
    return prisma.firmware.create({
      data,
    });
  }

  async findAll(): Promise<Firmware[]> {
    return prisma.firmware.findMany();
  }

  async findById(id: number): Promise<Firmware | null> {
    console.log("🚀 ~ FirmwareRepository ~ findById ~ id:", id);
    return prisma.firmware.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    data: Partial<Omit<Firmware, "id" | "createdAt">>
  ): Promise<Firmware> {
    return prisma.firmware.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.firmware.delete({
      where: { id },
    });
  }
}
