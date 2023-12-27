// middlewares/auth.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    if (req.headers.authorization != null) {
      const token = req.headers.authorization.split(" ")[1];

      jwt.verify(
        token,
        process.env.USER_TOKEN_KEY,
        async function (err, decodedToken) {
          if (err) {
            return res
              .status(401)
              .json({ message: "Authentication failed!!!!!!!!" });
          } else {
            next();            
          }
        }
      );
    } else {
      return res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};
