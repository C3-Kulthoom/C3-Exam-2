const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());


app.use("/",booksRoutes  )
const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
