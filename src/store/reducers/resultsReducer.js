const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_RESULT":
      return {
        ...state,
        results: [
          ...state.results,
          { id: new Date(), value: action.payload.result }
        ] //state.results.concat({id: new Date(), value:state.counter})
      };

    case "DELETE_RESULT":
      return {
        ...state,
        results: [
          ...state.results.filter((result) => result.id !== action.payload.id)
        ]
      };

    default:
      return state;
  }
};

export default resultReducer;
