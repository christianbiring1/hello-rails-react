import React, { useEffect, useState } from "react";
import Salutation from "./salutation";

const Greeting = () => {
  const [message, setmessage] = useState([])
  const messagesUrl = 'api/v1/messages'

  const fetchMessages = () => {
    fetch(messagesUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setmessage(data)
    })
  }

  useEffect(() => {
    fetchMessages()
  }, [])
  return (
    <div>
      <h1>Hello World!</h1>
      <ul>
        {
          message.map((item) => <Salutation key={item.id} content={item.content} />)
        }
      </ul>
    </div>
  );
}

export default Greeting
