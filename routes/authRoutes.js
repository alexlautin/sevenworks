const express = require("express");
const { db, auth } = require("../firebaseConfig");
const authMiddleware = require("../middleware/authMiddleware"); // imports Middleware

const router = express.Router();

// signup Route (updated)
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // create user in Firebase auth
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: username,
    });

    // stores additional user info in Firestore
    await db.collection("users").doc(userRecord.uid).set({
      username,
      email,
      createdAt: new Date().toISOString(),
      emailVerified: false, // ensures tracking of email verification
    });

    // sends verification email
    const user = await auth.getUser(userRecord.uid);
    await auth.generateEmailVerificationLink(user.email);

    const token = await auth.createCustomToken(userRecord.uid);
    res.json({
      msg: "User created successfully. Verification email sent.",
      token,
      user: userRecord,
    });

  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Firebase REST API to get ID token
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPjF9ujr8-xqtqTn7S4n9lSrwuJuP9v0w",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    const data = await response.json();
    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    res.json({ msg: "Login successful", token: data.idToken, user: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// gets user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    console.log("User Data in Middleware:", req.user); // debugging output

    if (!req.user || !req.user.uid) {
      console.log("No UID found in user data");
      return res.status(400).json({ error: "Invalid user session" });
    }

    // gets user data from Firestore
    const userDoc = await db.collection("users").doc(req.user.uid).get();

    if (!userDoc.exists) {
      console.log("No user found in Firestore");
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ msg: "Welcome to your profile!", user: userDoc.data() });
  } catch (err) {
    console.error("Profile Route Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// gets user account details
router.get("/account", authMiddleware, async (req, res) => {
  try {
    const userRecord = await auth.getUser(req.user.uid); // gets user from Firebase
    res.json({ user: userRecord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update user account info (display name & email)
router.put("/account", authMiddleware, async (req, res) => {
  try {
    const { displayName, email } = req.body;
    
    // checks if the user already exists in Firestore
    const userDoc = await db.collection("users").doc(req.user.uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await auth.updateUser(req.user.uid, { displayName, email });

    // updates Firestore as well
    await db.collection("users").doc(req.user.uid).update({
      username: displayName,
      email,
    });

    res.json({ msg: "Account updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// changes user password
router.put("/account/password", authMiddleware, async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword) return res.status(400).json({ msg: "New password required" });

    await auth.updateUser(req.user.uid, { password: newPassword });

    res.json({ msg: "Password updated successfully" });
  } catch (err) {
    if (err.code === "auth/requires-recent-login") {
      return res.status(403).json({
        error: "You must reauthenticate before changing your password.",
      });
    }
    res.status(500).json({ error: err.message });
  }
});

// verify email route
router.get("/verify-email", authMiddleware, async (req, res) => {
  try {
    const user = await auth.getUser(req.user.uid);

    if (user.emailVerified) {
      // updates Firestore to reflect verification
      await db.collection("users").doc(req.user.uid).update({ emailVerified: true });
      res.json({ msg: "Email verified successfully!", emailVerified: true });
    } else {
      res.status(400).json({ msg: "Email is not verified yet.", emailVerified: false });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// export router
module.exports = router;
