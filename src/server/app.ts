import express, { Application, Request, Response } from "express";
import { sum } from "../utils/calc";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const app: Application = express();

const port: number = Number.parseInt(process.env.PORT ?? "") || 3001;

app.get("/api/hello", (_req: Request, res: Response) => {
  res.send("Hello todo " + sum(1, 2));
});

app.use(express.static("./dist/public"));

app.get("/*", (req, res) => {
  const indexPath = join(
    dirname(fileURLToPath(import.meta.url)),
    "public/index.html"
  );
  res.sendFile(indexPath);
});

if (import.meta.env.PROD) {
  app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
  });
}
