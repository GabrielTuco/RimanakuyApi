const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/translate", async (req, res) => {
  const data = req.body;

  const respuesta = await axios.post(
    "https://traductoquechua-phslq.eastus2.inference.ml.azure.com/score",
    {
      input_data: data.text,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer em8Kc4gQ3K9tDjcSkhrdPVtE1Z4Ulven",
      },
    }
  );
  res.send(respuesta.data);
});

const port = process.env.port || 80;
app.listen(port, () => {
  console.log("Server ready");
});
