const express = require("express");
const fetch = require("node-fetch");
const nodeCache = require("node-cache");

const app = express();

const port = 3000;

// create my cache
const cache = new nodeCache({ stdTTL: 15 }); // 2 minutes
const cacheKey = "postsCache";
const url = "https://jsonplaceholder.typicode.com/posts";

app.get("/posts", async (req, res) => {
  try {
    // check if posts is ni cache
    let posts = cache.get(cacheKey);
    if (!posts) {
      posts = await fetchPosts();

      // cache the posts
      cache.set(cacheKey, posts);
    }
    res.send(posts);
  } catch (error) {
    res.status(500).send("An error occured please try again later");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// function to fetch posts
const fetchPosts = async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};
