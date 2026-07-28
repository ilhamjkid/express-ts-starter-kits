import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send({ message: "Hello, Feature-Based Architecture!" });
});

export default app;
