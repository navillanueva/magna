# home-assignment-boilerplate

## Initialize Project

1. Install dependencies `yarn`
2. Run docker container `docker-compose up`
3. Run `cp .env.example .env` to create your .env file
4. To migrate the database and sync GraphQL schema run `yarn sync`
5. To load hardcoded data into the databasa run `yarn db:seed`

## Create new Migration with Prisma

Any prisma file changes will require to run migration to generate SQL migration.
To do so just run `yarn db:migrate`.
To apply migration run `yarn db:up`.
Finally to run `yarn db:generate-prisma` to generate GraphQL types based on Prisma schema.

## Running unit tests

To run unit tests use `yarn test`
