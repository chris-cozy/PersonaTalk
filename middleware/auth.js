async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, continue to the next middleware/route handler
  }
  // User is not authenticated
  res.status(500).json({ message: "User not logged in." });
}

async function checkRole([allowedRoles]) {
  return (req, res, next) => {
    // Check if user is authenticated and has the required role
    if (req.isAuthenticated() && allowedRoles.includes(req.user.role)) {
      return next(); // User has the required role, continue to the next middleware
    }
    // User is not authorized
    return res
      .status(403)
      .json({ message: "Access denied, not enough clearance" });
  };
}

module.exports = {
  ensureAuthenticated,
  checkRole,
};
