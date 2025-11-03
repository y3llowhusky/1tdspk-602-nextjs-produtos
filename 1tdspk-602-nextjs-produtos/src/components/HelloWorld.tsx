"use client";
import { useEffect, useState } from "react";

const HelloWorld = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadHelloWorld = async () => {
      const response = await fetch("http://localhost:3000/api");
      const data = await response.json();
      setMessage(data.message);
    };

    loadHelloWorld();
  }, []);

  return <div>{message}</div>;
};
export default HelloWorld;
