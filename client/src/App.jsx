import "./App.css";
import axios from "axios";
import {saveAs} from "file-saver";
import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [receiptId, setReceiptId] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  return (
    <>
      <input type="text" placeholder="Name" name="name" />
      <input type="number" placeholder="Receipt Id" name="receiptId" />
      <input type="text" placeholder="Price 1" name="name" />
      <input type="text" placeholder="Price 2" name="name" />
      <button className="btn">Dowload PDF</button>
    </>
  );
}

export default App;
