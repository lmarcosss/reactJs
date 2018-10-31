import { lojaRef } from "../../config/firebase";
import { SELECT_PRODUCTS } from "./types";

export const addProduct = newProduct => async dispatch => {
  lojaRef.push().set(newProduct);
};

export const deleteProduct = productId => async dispatch => {
  lojaRef.child(productId).remove();
};

export const editProduct = (productId, newProduct) => async dispatch => {
  lojaRef.child(productId).set(newProduct);
};

export const selectProduct = productId => async dispatch => {
  lojaRef.child(productId).get();
};

export const selectAllProducts = () => async dispatch => {
  lojaRef.on("value", snapshot => {
    dispatch({
      type: SELECT_PRODUCTS,
      payload: snapshot.val()
    });
  });
};
