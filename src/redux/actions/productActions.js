import { ActionTypes } from "../constants/action-types";
export const SetProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    Payload: products,
  };
};
export const SelectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    Payload: product,
  };
};
export const RemoveSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
