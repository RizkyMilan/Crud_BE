import express from "express";
import db from "./db/index.js";
import { taskRoute } from "./routes/index.js";

const PORT = 2002;
const app = express();

app.use(express.json())
app.use("/task", taskRoute);

app.listen(PORT, () => {
  db.connect((err) => {
    if (err) console.log(err);

    console.log("MY SQL Connected");
  });

  console.log("API Listening in port", PORT);
});
