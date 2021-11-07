import { PDFViewer, usePDF } from "@react-pdf/renderer";
import "./App.css";
import MyDocument from "./MyDocument";

const App = () => {
  const [instance, updateInstance] = usePDF({ document: <MyDocument /> });
  return (
    <>
      <PDFViewer width='100%'>
        <MyDocument />
      </PDFViewer>
      <embed src={instance.url} width='100%' type='application/pdf' />
    </>
  );
};

export default App;
