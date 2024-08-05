/* server.ts */

import express from "express";
import "express-async-errors";

const app: express.Express = express();
const port = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`http://localhost:${port} でサーバー起動中`);
});