import 'reflect-metadata';
import { createYoga } from 'graphql-yoga';
import type { NextApiHandler } from 'next';
import { createGraphQLSchema, CreateSchemaOptions, graphqlSchemaOptions } from '@/api/graphql/schema';

// Q: why are the using the graphql/schema package for creating the schema if the graphql-yoga package already has a createYoga function?

export const graphqlEndpoint = '/api/gql';

// leveraging Next.js API routes to create the graphql endpoint

let yogaGraphQLHandler: NextApiHandler;

// im assuming nextApiHandler has both the NextApiRequest and NextApiResponse funcs

function createGraphQLHandler(schemaOptions: CreateSchemaOptions): NextApiHandler {
  return async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.end();
      return;
    }

    if (!yogaGraphQLHandler) {
      const schema = await createGraphQLSchema(schemaOptions);

      yogaGraphQLHandler = await createYoga({
        schema,
        maskedErrors: true,
        graphqlEndpoint,
        graphiql: true,
        logging: true,
      });
    }

    return yogaGraphQLHandler(req, res);
  };
}

const handler = createGraphQLHandler(graphqlSchemaOptions);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
