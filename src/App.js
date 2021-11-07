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
      <PDFViewer width='100%'>
        <MyDocument timeout={time} />
      </PDFViewer>
      <embed src={instance.url} width='100%' type='application/pdf' />
    </>
  );
};

export default App;
