import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = 'api/v1/messages';
const GET_MESSAGE = 'rails/redux/GET_MESSAGE'

const getData = (messages) => {
  return {
    type: GET_MESSAGE,
    messages,
  }
}

export const fetchMessages = () => async (dispatch) => {
  const messages = [];
  const response = await axios.get(BASEURL);
  const messageData = await response.data;
  messageData.forEach((msg) => {
    messages.push(msg.content);
  })
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

const rootReducer = combineReducers({
  message: dataReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
