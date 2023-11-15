import { gql, useQuery } from '@apollo/client';

/**
const ALLOCATION_QUERY = gql(`
  query allocation {
    allocation {
      id
      amount
    }
  }

  include this under h1 allocation
  <pre>{JSON.stringify(data, null, 2)}</pre>
`);

 */

const IndexPage = () => {
  // const { data } = useQuery(ALLOCATION_QUERY, {});

  return (
    <>
      <h1>Allocation</h1>
    </>
  );
};

export default IndexPage;
