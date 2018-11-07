import { productsRef } from "../../config/firebase";
import { SELECT_PRODUCTS } from "./types";

export const addProduct = newProduct => async dispatch => {
  productsRef.push().set(newProduct);
  const newProductWithId = newProduct;
  console.log(productsRef.child(newProduct));
  // newProductWithId.id = Object.keys(productsRef.child(newProduct))[0];
  productsRef.child(newProduct).set(newProductWithId);
};

export const deleteProduct = productId => async dispatch => {
  productsRef.child(productId).remove();
};

export const editProduct = (productId, newProduct) => async dispatch => {
  productsRef.child(productId).set(newProduct);
};

export const selectProduct = productId => async dispatch => {
  productsRef.child(productId).get();
};

export const selectAllProducts = () => async dispatch => {
  productsRef.on("value", snapshot => {
    dispatch({
      type: SELECT_PRODUCTS,
      payload: snapshot.val()
    });
  });
};
