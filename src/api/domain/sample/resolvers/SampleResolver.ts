import { Query, Resolver } from 'type-graphql';
import SampleService from '@/api/domain/sample/services/SampleService';
import { Sample } from '@/common/graphql/types';

// resolvers are the logic that happens when the query is executed
// add code here for adding a new API to the Sample data structure

@Resolver(Sample)
export default class SampleResolver {
  @Query(() => Sample)
  async sample(): Promise<Sample> {
    return SampleService.getFirstSample();
  }
}
