const icecreamInitial = {
  numOfIcecreams: 20,
};

const iceCreamReducer = (state = icecreamInitial, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
