import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOG_ON_START,
  LOG_ON_SUCCESS,
  LOG_ON_FAIL,
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAILURE,
  CREATE_POST_START,
  CREATE_POST_FAIL,
  CREATE_POST_SUCCESS,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
  UPDATE_USER,
  EDIT_POST,
  DEL_POST_SUCCESS,
} from "../";

const initialState = {
  data: {
    content: "",
    name: "",
    pid: 0
    },
  // posts: [],
  // loading: false,
  // error: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_START:
    case LOG_ON_START:
    case LOAD_START:
    case CREATE_POST_START:
    case ADD_POST_START:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return {
        user: {
          ...state.user,
          ...payload,
          isLoggedIn: true,
        },
        loading: false,
      };
    case LOG_ON_SUCCESS:
      return {
        ...state,
        user: {
          username: payload.username,
          password: payload.password,
          isLoggedIn: true,
        },
        loading: false,
      };
    case CREATE_POST_SUCCESS:
      console.log(state.posts);
      return { ...state, posts: [...state.posts, payload] };
    case ADD_POST_SUCCESS:
      console.log(payload);
      return {
        ...state,
        user: {
          ...state.user,
          posts: state.user.posts.map((list) => {
            if (list.title === payload.list) {
              return {
                ...list,
                items: [...list.items, payload.todoVals],
              };
            } else {
              return list;
            }
          }),
        },
      };
    case DEL_POST_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          posts: state.user.posts.map((list) => {
            if (list.id === payload.id) {
              const newList = list.items.filter(function (item) {
                return item.name !== payload.name;
              });
              return newList;
            } else return list;
          }),
        },
      };
    // case EDIT_POST:
    //     return {
    //         ...state,
    //         user: {
    //             ...state.user,
    //             posts: state.user.posts.map( list => {
    //                 if (list.title === payload.list){
    //                     return {
    //                         ...list, items: [ ...list.items, payload.todoVals]
    //                     }
    //                 } else {
    //                     return list
    //                 }
    //             })
    //         }
    //     }
    case LOAD_SUCCESS:
      console.log("LOADING PAYLOAD: ", payload);
      return {
        ...state,
        user: {
          ...payload,
        },
        error: initialState.error,
        loading: false,
      };
    case UPDATE_USER:
      console.log("UPDATE USER REDUCER", payload);
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    case EDIT_POST:
      return {
        ...state,
        user: {
          ...state.user,
          posts: state.posts.map((list) => {
            if (list.todoid === payload.todoid) {
              for (let todo in list) {
                if (todo.itemid === payload.itemid) {
                  todo = payload.todo;
                } else return todo;
              }
              return list;
            } else return list;
          }),
        },
      };
    case LOG_ON_FAIL:
    case SIGN_UP_FAIL:
    case LOAD_FAILURE:
    case CREATE_POST_FAIL:
    case ADD_POST_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
