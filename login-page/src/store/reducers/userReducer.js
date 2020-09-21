import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from '../actions/userAction';

const initialState = {
  data: [],
  isFetching: false,
  error: ""
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        isFetching: true,
        error:"",
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "",
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
