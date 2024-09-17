import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class PaymentRepository {
  // Método para salvar transação no banco de dados
  async saveTransaction(sessionId: string, status: string) {
    return prisma.payment.create({
      data: {
        sessionId,
        status,
      },
    });
  }

  // Método para buscar uma transação por sessionId
  async findTransactionBySessionId(sessionId: string) {
    return prisma.payment.findUnique({
      where: { sessionId },
    });
  }
}
