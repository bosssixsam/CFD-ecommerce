import { all } from "redux-saga/effects";

// import itemSaga from "./itemSaga";
// import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([
    // itemSaga(),
    // userSaga(),
    // // getitemSaga()
  ]);
}
