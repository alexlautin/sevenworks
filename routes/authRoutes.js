const express = require("express");
const { db, auth } = require("../firebaseConfig");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ Import Middleware

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create user in Firebase Auth
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: username,
    });

    // Store additional user info in Firestore
    await db.collection("users").doc(userRecord.uid).set({
      username,
      email,
      createdAt: new Date().toISOString(),
    });

    const token = await auth.createCustomToken(userRecord.uid);
    res.json({ msg: "User created successfully", token, user: userRecord });
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Firebase REST API to get ID token
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPjF9ujr8-xqtqTn7S4n9lSrwuJuP9v0w", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });

    const data = await response.json();
    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    res.json({ msg: "Login successful", token: data.idToken, user: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Protected route: Get user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    console.log("🔍 User Data in Middleware:", req.user); // Debugging output

    if (!req.user || !req.user.uid) {
      console.log("❌ No UID found in user data");
      return res.status(400).json({ error: "Invalid user session" });
    }

    // Retrieve user data from Firestore
    const userDoc = await db.collection("users").doc(req.user.uid).get();

    if (!userDoc.exists) {
      console.log("❌ No user found in Firestore");
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ msg: "Welcome to your profile!", user: userDoc.data() });
  } catch (err) {
    console.error("Profile Route Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

