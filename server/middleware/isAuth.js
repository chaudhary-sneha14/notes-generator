import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) return res.json("Token is not found");

    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!verifyToken) {
      res.status(400).json({ message: "user is not have valid token" });
    }
    
    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "is Auth is error" });
  }
};

export default isAuth;
