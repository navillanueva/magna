import { buildSchema, BuildSchemaOptions } from 'type-graphql';
import AllocationResolver from '@/api/domain/sample/resolvers/AllocationResolver';
import SampleResolver from '@/api/domain/sample/resolvers/SampleResolver';

// defines how this data is queried and mutated through the GraphQL API

const resolvers: BuildSchemaOptions['resolvers'] = [SampleResolver, AllocationResolver];

// import each resolver manually here
export type CreateSchemaOptions = {
  resolvers: BuildSchemaOptions['resolvers'];
};

export const graphqlSchemaOptions: CreateSchemaOptions = {
  resolvers,
};

export async function createGraphQLSchema(options: CreateSchemaOptions) {
  const { resolvers } = options;

  const localSchema = await buildSchema({
    resolvers,
  });

  return localSchema;
}
