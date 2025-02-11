import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as types from "./actionTypes";

// API Endpoints
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch Users Saga
function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: types.FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_USERS_FAILURE, payload: error.message });
  }
}

// Add User Saga
function* addUserSaga(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put({ type: types.ADD_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// Update User Saga
function* updateUserSaga(action) {
  try {
    const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
    yield put({ type: types.UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

// Delete User Saga
function* deleteUserSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: types.DELETE_USER_SUCCESS, payload: action.payload });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

// Watcher Saga
export function* userSaga() {
  yield takeEvery(types.FETCH_USERS, fetchUsersSaga);
  yield takeEvery(types.ADD_USER, addUserSaga);
  yield takeEvery(types.UPDATE_USER, updateUserSaga);
  yield takeEvery(types.DELETE_USER, deleteUserSaga);
}
