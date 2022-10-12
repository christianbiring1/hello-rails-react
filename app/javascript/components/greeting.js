import React, { useEffect, useState } from "react";
import Salutation from "./salutation";
import { fetchMessages } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";

const Greeting = () => {
  const messages = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);
  return (
    <div>
      <h1>Hello react Rails!</h1>
        {
          messages.map((item) => <Salutation content={item} />)
        }
    </div>
  );
}

export default Greeting
