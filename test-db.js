import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing Supabase connection...');
  const userCount = await prisma.user.count();
  console.log(`Connection successful! Current user count in Supabase: ${userCount}`);
}

main()
  .catch((e) => {
    console.error('Error connecting to Supabase:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
