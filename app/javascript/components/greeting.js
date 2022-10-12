import React, { useEffect, useState } from "react";
import Salutation from "./salutation";
import { fetchMessages } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";

const Greeting = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);
  return (
    <div>
      <h1>Hello react Rails!</h1>
        {
          message.map((item) => <Salutation key={item.id} content={item.content} />)
        }
    </div>
  );
}

export default Greeting
