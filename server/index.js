import express from "express";
import bodyParser from "body-parser";
import pdf from "html-pdf";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => console.log("listen on port", port));
