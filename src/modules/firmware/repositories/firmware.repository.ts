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

  async findById(id: string): Promise<Firmware | null> {
    return prisma.firmware.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: Partial<Omit<Firmware, "id" | "createdAt">>
  ): Promise<Firmware> {
    return prisma.firmware.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.firmware.delete({
      where: { id },
    });
  }
}
