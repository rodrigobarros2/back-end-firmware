const xlsx = require("xlsx");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function saveToDatabase() {
  try {
    const filePath = path.join(__dirname, "./data/tabela.xlsx");
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(worksheet);

    for (const item of data) {
      const modelo = item.MODELO || null;
      const descricao = item["DESCRIÇÃO"] || item["DESCRIÃ\x87Ã\x83O"] || null;
      const link = item["LINK ATUAL"] || null;
      const versao =
        item["versão atual"] || item["versÃ£o atual"]
          ? parseInt(item["versão atual"] || item["versÃ£o atual"], 10)
          : null;
      const comoAtualizar = item["Como Atualizar "] || null;

      if (modelo && descricao && link) {
        const existingFirmware = await prisma.firmware.findFirst({
          where: { modelo },
        });

        if (
          !existingFirmware ||
          existingFirmware.descricao !== descricao ||
          existingFirmware.link !== link ||
          existingFirmware.versao !== versao ||
          existingFirmware.comoAtualizar !== comoAtualizar
        ) {
          await prisma.firmware.create({
            data: {
              modelo,
              descricao,
              link,
              versao,
              comoAtualizar,
            },
          });
          console.log(`Firmware com modelo ${modelo} cadastrado com sucesso.`);
        } else {
          console.log(
            `Firmware com modelo ${modelo} já existe com os mesmos dados. Registro ignorado.`
          );
        }
      } else {
        console.log(
          `Dados inválidos ou incompletos para o item: ${JSON.stringify(item)}`
        );
      }
    }

    console.log("Processo finalizado!");
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

saveToDatabase();
