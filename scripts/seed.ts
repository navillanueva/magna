import ExecutionContextManager from '@/db/context/ExecutionContextManager';

export default async function seed() {
  const ctx = ExecutionContextManager.createExecutionContext();

  const startDate = new Date();
  const endDate = new Date();

  await ctx.prisma.allocation.createMany({
    data: [
      { amount: 1000, vestingStart: startDate, vestingEnd: endDate, vestingPeriod: 'SECONDS' },
      { amount: 1000, vestingStart: startDate, vestingEnd: endDate, vestingPeriod: 'DAILY' },
      { amount: 1000, vestingStart: startDate, vestingEnd: endDate, vestingPeriod: 'MONTHLY' },
    ],
  });

  console.log('Sample data seeded successfully!');
}

seed();
