const NodeCache = require("node-cache");
const fetchPosts = require("../utils/helper");

const cache = new NodeCache({ stdTTL: 60 });
const getPosts = async (req, res, next) => {
  // get data from req.pagination
  const { startIndex, endIndex } = req.pagination;
  const cacheKey = `posts_${startIndex}_${endIndex}`;

  let paginatedPostsData = cache.get(cacheKey);

  if (!paginatedPostsData) {
    // fetch data
    let posts = await fetchPosts();
    // paginate the posts data
    paginatedPostsData = posts.slice(startIndex, endIndex);
    // store paginated data in the cache
    cache.set(cacheKey, paginatedPostsData);
  }

  res.status(200).send({ posts: paginatedPostsData });
};

module.exports = { getPosts };
