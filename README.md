# Simple-caching in API

Express REST API that implements the caching using `node-cache` libray.

Caching is a strategy used to enhance API speed by storing frequently requested data. Mostly, cachable data that cannot easily be changed. The `GET` method is the most cached HTTP method.

There is only one `GET` endpoint that is used to demonstrate caching concept.

- `/posts GET`: Get all posts from [dummyJSON](https://jsonplaceholder.typicode.com/posts) data.

- If you can clone/folk, this project is fully functioning and runnuing using the folloeing command:
 ``` bash
  npm i && node index.js
  ```
  More about the caching is explained [this]() blog.
