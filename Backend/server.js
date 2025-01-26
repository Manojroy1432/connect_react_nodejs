import express from "express";
import cors from "cors"

const app = express();

app.use(cors())

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "This is title1", desc: "this is describtion1" },
    { id: 2, title: "This is title2", desc: "this is describtion2" },
    { id: 3, title: "This is title3", desc: "this is describtion3" },
    { id: 4, title: "This is title4", desc: "this is describtion4" },
    { id: 5, title: "This is title5", desc: "this is describtion5" },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log("server is running at port 3000");
});
