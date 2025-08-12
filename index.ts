import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Conectando ao banco...");
  const course = await prisma.course.create({
    data: {
      name: "Curso de Node.js",
      modules: {
        create: [{ title: "Introdução" }, { title: "Prisma ORM" }]
      }
    },
    include: { modules: true }
  });

  console.log("Curso criado:");
  console.log(course);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
