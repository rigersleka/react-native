import * as actionTypes from '../types';

const initialState = {
  item: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      break;
    case actionTypes.REMOVE_FROM_CART:
      break;
  }

  return state;
};
