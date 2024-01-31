import express from "express";
import ViteExpress from "vite-express";
import { getPosts, createPost } from './db.js';

const app = express();

app.use(express.json());

app.get("/posts", (req, res) => {
  return res.json(getPosts());
});

app.put("/new", (req, res) => {
  createPost(req.body);  
  return res.json({ ok: true });
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
