import { Text } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

const MyTimeout = () => {
  const [time, setTime] = useState("in");
  useEffect(() => {
    const timer = setTimeout(() => setTime("out"), 3000);
    return () => clearTimeout(timer);
  }, []);
  return <Text>MyTime {time}</Text>;
};

export default MyTimeout;
