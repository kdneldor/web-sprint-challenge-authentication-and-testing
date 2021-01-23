function authenticate() {
  return async (req, res, next) => {
    try {
      if (!req.session || !req.session.user) {
        return res.status(401).json({
          message: "Invalid Credentials",
        });
      }
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  authenticate,
};
