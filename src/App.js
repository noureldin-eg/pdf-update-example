import { PDFViewer, usePDF } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import "./App.css";
import MyDocument from "./MyDocument";

const App = () => {
  const [time, setTime] = useState("in");
  useEffect(() => {
    const timer = setTimeout(() => setTime("out"), 6000);
    return () => clearTimeout(timer);
  }, []);

  const [instance, updateInstance] = usePDF({
    document: <MyDocument timeout={time} />,
  });
  return (
    <>
      <h1>PDFViewer:</h1>
      <PDFViewer width='100%'>
        <MyDocument timeout={time} />
      </PDFViewer>
      <h1>usePDF:</h1>
      <embed src={instance.url} width='100%' type='application/pdf' />
      <button onClick={updateInstance}>Update Instance</button>
    </>
  );
};

export default App;
