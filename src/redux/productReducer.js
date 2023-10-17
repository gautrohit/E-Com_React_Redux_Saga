import { SET_PRODUCT_LIST } from "./constant";

export const ProcuctList = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("ProcuctList called!!", action);
      return [...action.data];

    default:
      return data;
  }
};
