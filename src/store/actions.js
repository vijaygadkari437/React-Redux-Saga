import * as types from "./actionTypes";

// Fetch Users
export const fetchUsers = () => ({ type: types.FETCH_USERS });
export const fetchUsersSuccess = (users) => ({ type: types.FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = (error) => ({ type: types.FETCH_USERS_FAILURE, payload: error });

// Add User
export const addUser = (user) => ({ type: types.ADD_USER, payload: user });
export const addUserSuccess = (user) => ({ type: types.ADD_USER_SUCCESS, payload: user });

// Update User
export const updateUser = (user) => ({ type: types.UPDATE_USER, payload: user });
export const updateUserSuccess = (user) => ({ type: types.UPDATE_USER_SUCCESS, payload: user });

// Delete User
export const deleteUser = (id) => ({ type: types.DELETE_USER, payload: id });
export const deleteUserSuccess = (id) => ({ type: types.DELETE_USER_SUCCESS, payload: id });
