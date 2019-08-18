/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBin = `query GetBin($id: ID!) {
  getBin(id: $id) {
    id
    name
    description
    isPacked
    items {
      items {
        id
        name
        description
        isPacked
      }
      nextToken
    }
  }
}
`;
export const listBins = `query ListBins($filter: ModelBinFilterInput, $limit: Int, $nextToken: String) {
  listBins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      isPacked
      items {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    name
    description
    bin {
      id
      name
      description
      isPacked
      items {
        nextToken
      }
    }
    isPacked
  }
}
`;
export const listItems = `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      bin {
        id
        name
        description
        isPacked
      }
      isPacked
    }
    nextToken
  }
}
`;
