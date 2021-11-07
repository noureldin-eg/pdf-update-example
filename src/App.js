import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import MyDocument from "./MyDocument";

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default App;
