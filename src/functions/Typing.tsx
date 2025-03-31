import { useEffect, useState } from "react";

interface Props {
  message: string;
  speed?:number;
}

export default function Typing({ message ,speed=30}: Props) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < message.length) {
        setText((prev) => prev + message.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, message]); 

  return <>{text}</>;
}
