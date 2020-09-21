import axiosWithAuth from '../../utlis/axiosWithAuth'


export const ADD_USER = "ADD_USER";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";


export const addUser = (user) => ( dispatch ) =>{
  dispatch({type: ADD_USER })
    axiosWithAuth()
      .post('auth/register', user)
      .then(res => {
        console.log(res)
        dispatch({
              type: ADD_USER_SUCCESS,
              payload: res.data
        });

      })
    .catch(err => {
      console.log(err.response)
      dispatch({
        type: ADD_USER_ERROR,
        payload: err.response
  });
    });
};
