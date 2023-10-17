import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProductList() {
  let data = yield fetch("http://localhost:3007/products");
  data = yield data.json();
  console.log("Product list called SAGA!!", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProductList);
}

export default productSaga;
