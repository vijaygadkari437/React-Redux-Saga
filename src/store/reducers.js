import * as types from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return { ...state, loading: true };
      
    case types.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
      
    case types.FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case types.ADD_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };

    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
