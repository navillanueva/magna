import { Query, Resolver } from 'type-graphql';
import AllocationService from '@/api/domain/sample/services/AllocationService';
import { Allocation } from '@/common/graphql/types';

// resolvers are the logic that happens when the query is executed
// add code here for adding a new API to the Sample data structure

@Resolver(Allocation)
export default class AllocationResolver {
  @Query(() => Allocation)
  async allocation(): Promise<Allocation> {
    return AllocationService.getFirstAllocation();
  }
}
