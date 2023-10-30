import "./App.css";
import axios from "axios";
import {saveAs} from "file-saver";
import {useEffect, useState} from "react";

function App() {
  const [customerName, setCustomerName] = useState("");
  const [receiptId, setReceiptId] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);

  const handleInputs = ({target: {value, name}}) => {
    switch (name) {
      case "customerName":
        setCustomerName(value);
        break;
      case "receiptId":
        setReceiptId(value);
        break;
      case "price1":
        setPrice1(value);
        break;
      case "price2":
        setPrice2(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        name="customerName"
        onChange={(e) => handleInputs(e)}
      />
      <input
        type="number"
        placeholder="Receipt Id"
        name="receiptId"
        onChange={(e) => handleInputs(e)}
      />
      <input
        type="text"
        placeholder="Price 1"
        name="price1"
        onChange={(e) => handleInputs(e)}
      />
      <input
        type="text"
        placeholder="Price 2"
        onChange={(e) => handleInputs(e)}
        name="price2"
      />
      <button className="btn">Dowload PDF</button>
    </>
  );
}

export default App;
