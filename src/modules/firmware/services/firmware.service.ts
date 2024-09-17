import { Firmware } from "@prisma/client";
import { FirmwareRepository } from "../repositories/firmware.repository";

export class FirmwareService {
  private firmwareRepository: FirmwareRepository;

  constructor() {
    this.firmwareRepository = new FirmwareRepository();
  }

  async create(data: Omit<Firmware, "id" | "createdAt">): Promise<Firmware> {
    return this.firmwareRepository.create(data);
  }

  async findAll(): Promise<Firmware[]> {
    return this.firmwareRepository.findAll();
  }

  async findById(id: string): Promise<Firmware | null> {
    return this.firmwareRepository.findById(id);
  }

  async update(
    id: string,
    data: Partial<Omit<Firmware, "id" | "createdAt">>
  ): Promise<Firmware> {
    return this.firmwareRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.firmwareRepository.delete(id);
  }
}
