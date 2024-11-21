require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bfhlRoutes = require("./routes/bfhl");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/bfhl", bfhlRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
