import {
  FETCH_ALL,
  DELETE,
  UPDATE,
  CREATE,
  LIKE,
} from "../constants/actionTypes";

const posts = (state = [], action) => {
  switch (action.type) {
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case UPDATE:
    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default posts;
