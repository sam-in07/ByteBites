import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Get the Authorization header
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.json({
      success: false,
      message: "No token provided",
    });
  }

  // Format: "Bearer <token>"
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id; // attach userId to request
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default authMiddleware;