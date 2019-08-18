/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBin = `mutation CreateBin($input: CreateBinInput!) {
  createBin(input: $input) {
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
export const updateBin = `mutation UpdateBin($input: UpdateBinInput!) {
  updateBin(input: $input) {
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
export const deleteBin = `mutation DeleteBin($input: DeleteBinInput!) {
  deleteBin(input: $input) {
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
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
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
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
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
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
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
