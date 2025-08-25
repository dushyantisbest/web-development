import { listingValidation, reviewValidation } from "./schemaValidation.js";

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

const validateListing = (req, res, next) => {
  if (listingValidation.validate(req.body).error) {
    throw new ErrorHandlingExpress(
      400,
      listingValidation.validate(req.body).error
    );
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  if (reviewValidation.validate(req.body).error) {
    throw new ErrorHandlingExpress(
      400,
      reviewValidation.validate(req.body).error
    );
  } else {
    next();
  }
};

export {
  isLoggedIn,
  saveRedirectUrlLocal,
  saveRedirectUrlSession,
  validateListing,
  validateReview,
};
