/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBin = `subscription OnCreateBin {
  onCreateBin {
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
export const onUpdateBin = `subscription OnUpdateBin {
  onUpdateBin {
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
export const onDeleteBin = `subscription OnDeleteBin {
  onDeleteBin {
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
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
