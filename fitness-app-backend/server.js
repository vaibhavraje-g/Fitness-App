const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./src/routes/index");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Fitness App Backend Running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
