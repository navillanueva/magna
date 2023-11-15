import { Arg, Query, Resolver } from 'type-graphql';
import AllocationService from '@/api/domain/sample/services/AllocationService';
import { Allocation, TYPE } from '@/common/graphql/types';
// import { TYPE } from '@/db/client';

// resolvers are the logic that happens when the query is executed
// add code here for adding a new API to the Sample data structure

@Resolver(Allocation)
export default class AllocationResolver {
  @Query(() => Allocation)
  async allocation(): Promise<Allocation[]> {
    return AllocationService.getAllocations();
  }

  @Query(() => [Date])
  vestingData(
    @Arg('vestingPeriod', () => TYPE) vestingPeriod: TYPE,
    @Arg('vestingStart', () => Date) vestingStart: Date,
    @Arg('vestingEnd', () => Date) vestingEnd: Date,
  ): Date[] {
    return AllocationService.getVestingData(vestingPeriod, vestingStart, vestingEnd);
  }
}
