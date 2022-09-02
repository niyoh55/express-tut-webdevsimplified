const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.status(200).send({
  //     message: "Hello cowboy!",
  //   });
  res.render("index", { text: "Hello World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
