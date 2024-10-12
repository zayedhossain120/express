const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;

const app = express();

const posts = [
  {
    id: 1,
    title: "Post one",
  },
  {
    id: 2,
    title: "Post two",
  },
  {
    id: 3,
    title: "Post three",
  },
  {
    id: 4,
    title: "Post Four",
  },
  {
    id: 5,
    title: "Post five",
  },
];

app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  console.log(isNaN(limit));

  if (!isNaN(limit)) {
  }

  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.find((post) => post.id == id));
});

app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`);
});
