import { TYPE } from '@/db/client';
import ExecutionContextManager from '@/db/context/ExecutionContextManager';

class AllocationService {
  getAllocations() {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.allocation.findMany({});
  }

  getVestingData(vestingPeriod: TYPE, vestingStart: Date, vestingEnd: Date): Date[] {
    let currentDate = new Date(vestingStart);
    const result = [];

    while (currentDate <= vestingEnd) {
      // Add the current date to the result array
      result.push(new Date(currentDate));

      // Increment the current date based on the vesting period
      switch (vestingPeriod) {
        case TYPE.SECONDS:
          currentDate.setSeconds(currentDate.getSeconds() + 1);
          break;
        case TYPE.DAILY:
          currentDate.setDate(currentDate.getDate() + 1);
          break;
        case TYPE.MONTHLY:
          currentDate.setMonth(currentDate.getMonth() + 1);
          break;
        default:
          throw new Error('Invalid vesting period type');
      }
    }

    return result;
  }
}

export default new AllocationService();
