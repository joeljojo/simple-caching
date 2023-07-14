const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts";

// function to fetch posts
const fetchPosts = async () => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

module.exports = fetchPosts;
