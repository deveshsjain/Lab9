const resultRoutes = require("./result");

const constructorMethod = app => {
  app.use("/", resultRoutes);

  app.use("*", (req, res) => {
    res.redirect("/welcome/index");
  });
};

module.exports = constructorMethod;
