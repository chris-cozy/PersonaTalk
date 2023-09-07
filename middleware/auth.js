async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, continue to the next middleware/route handler
  }
  // User is not authenticated
  res.redirect("/login");
}

module.exports = {
  ensureAuthenticated,
};
