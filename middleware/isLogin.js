const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  //  Get Token
  const token = getTokenFromHeader(req, res);

  //   verify token
  const decodedUser = verifyToken(token);

  if (!decodedUser) {
    return res.status(401).json({
      message: "Expire/Invalid Token , Please Login again",
    });
  } else {
    req.userAuth = decodedUser.id;
    next();
  }
};

module.exports = isLogin;
