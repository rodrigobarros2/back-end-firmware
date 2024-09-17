import { Request, Response } from "express";
import { FirmwareService } from "../services/firmware.service";

const firmwareService = new FirmwareService();

export class FirmwareController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, brand } = req.body;
      const newFirmware = await firmwareService.create({ name, brand });
      return res.status(201).json(newFirmware);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating firmware", error });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const firmwares = await firmwareService.findAll();
      return res.status(200).json(firmwares);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error fetching firmwares", error });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const firmware = await firmwareService.findById(id);

      if (!firmware) {
        return res.status(404).json({ message: "Firmware not found" });
      }

      return res.status(200).json(firmware);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error fetching firmware", error });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedFirmware = await firmwareService.update(id, data);

      return res.status(200).json(updatedFirmware);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error updating firmware", error });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await firmwareService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error deleting firmware", error });
    }
  }
}
