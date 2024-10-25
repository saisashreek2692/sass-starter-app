import { PrismaClient } from "@prisma/client";

const primaClientSingleTon = () => {
  return new PrismaClient();
};

const globalForPrimsa = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const primsa = globalForPrimsa.prisma ?? primaClientSingleTon();

export default primsa;

if (process.env.NODE_ENV !== "production") globalForPrimsa.prisma = primsa;
