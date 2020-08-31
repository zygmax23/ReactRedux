export const addValueAction = (value) => {
  return {
    type: "ADD",
    payload: {
      value: value
    }
  };
};

export const subtractValueAction = (value) => {
  return {
    type: "SUBTRACT",
    payload: {
      value: value
    }
  };
};

export const storeResultAction = (result) => {
  return {
    type: "STORE_RESULT",
    payload: {
      result: result
    }
  };
};

export const deleteResultAction = (id) => {
  return {
    type: "DELETE_RESULT",
    payload: {
      id: id
    }
  };
};
