const getTokenFromHeader = (req, res) => {
  const authorization = req.headers.authorization;

  if (authorization && authorization.startsWith("Bearer")) {
    let token = authorization.split(" ")[1];

    if (token !== undefined) {
      return token;
    } else {
      res.json({ message: "Token is Invalid" });
    }
  }
};

module.exports = getTokenFromHeader;
