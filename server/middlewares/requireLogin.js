module.exports = (req, res, next) => {
  if (!req.user)
    return res.status(401).send({
      error: { message: "To access our services, Please Login!!" },
    });
  next();
};
