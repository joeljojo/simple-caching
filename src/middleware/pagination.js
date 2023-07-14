const paginationMiddleware = (req, res, next) => {
  // get data from req.query
  const page = parseInt(req.query.page) || 1; // First page(default)
  const limit = parseInt(req.query.limit) || 5; // number of items per gage
  const startIndex = (page - 1) * limit; // offset
  const endIndex = page * limit;

  // Attach paging data to req object
  req.pagination = {
    page,
    limit,
    startIndex,
    endIndex,
  };
  next();
};

module.exports = paginationMiddleware;
