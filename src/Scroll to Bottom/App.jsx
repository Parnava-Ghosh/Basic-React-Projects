import { useState, useRef, useEffect } from "react";

export default function App() {
  const chatBoxRef = useRef();
  const [messages, setMessages] = useState(["Hello, How are you"]);
  const inputRef = useRef();

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  function messageHandler() {
    const newMessages = inputRef.current.value.trim();
    if(newMessages){
      setMessages((prevMessages) => [...prevMessages, newMessages]);
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <div
        ref={chatBoxRef}
        style={{
          height: "200px",
          overflowY: "scroll",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input ref = {inputRef} type="text" placeholder="Enter Messages" /><br/>
      <button onClick={messageHandler}>Add Messages</button>
    </>
  );
}
