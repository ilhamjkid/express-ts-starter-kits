import app from "./app.ts";

const PORT = 3000;

app.listen(PORT, () => {
  console.info(`Server running on PORT ${PORT}`);
});
