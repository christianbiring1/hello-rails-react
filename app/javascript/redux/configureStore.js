import { configureStore } from "@reduxjs/toolkit";

const BASEURL = 'api/v1/messages';
const GET_MESSAGE = 'rails/redux/GET_MESSAGE'

const getData = (messages) => {
  return {
    type: GET_MESSAGE,
    payload: messages
  }
}

export const fetchMessages = () => async (dispatch) => {
  const messages = [];
  fetch(BASEURL)
  .then((response) => response.json())
  .then((data) => messages.push(data));
  dispatch(getData(messages))
}

const dataReducer = (state = [], action) => {
  switch(action.type) {
    case GET_MESSAGE:
      return action.messages;
    default:
      return state;
  }
};

const store = configureStore({reducer: dataReducer});
export default store;

// console.log(store);
