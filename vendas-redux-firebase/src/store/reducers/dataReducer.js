import { SELECT_PRODUCTS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
