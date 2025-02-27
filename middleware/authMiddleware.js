const { auth } = require("../firebaseConfig");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    // Check if the token exists
    if (!token) {
      console.log("❌ No token received");
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    console.log("✅ Received Token:", token);

    // Verify Firebase ID Token
    const decodedToken = await auth.verifyIdToken(token);
    console.log("🔍 Decoded Token:", decodedToken); // Debugging step

    // Check if uid exists in the decoded token
    if (!decodedToken || !decodedToken.uid) {
      console.log("❌ UID not found in token");
      return res.status(401).json({ msg: "Invalid token structure" });
    }

    req.user = decodedToken; // Attach user data
    next();
  } catch (err) {
    console.log("❌ Token verification error:", err.message);
    res.status(401).json({ msg: "Token is not valid", error: err.message });
  }
};

module.exports = authMiddleware;



