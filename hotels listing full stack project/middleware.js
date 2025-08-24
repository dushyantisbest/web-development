const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You are not logged in");
    return res.redirect("/user/login");
  }
  next();
};

const saveRedirectUrlSession = (req, res, next) => {
  req.session.redirectUrl = req.originalUrl;
  next();
};

const saveRedirectUrlLocal = (req, res, next) => {
  if (!req.session.redirectUrl) {
    req.session.redirectUrl = "/listing";
  }
  res.locals.redirectUrl = req.session.redirectUrl;

  next();
};

export { isLoggedIn, saveRedirectUrlLocal, saveRedirectUrlSession };
