const express = require("express");
const passport = require("passport");
const { loginWithGoogle, loginWithDiscord, loginWithFacebook } = require("../controllers/authController");

const router = express.Router();

// Rutas para autenticación
router.get("/google", loginWithGoogle);
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
  res.redirect("/"); // Redirige a la página de inicio tras el login exitoso
});

router.get("/discord", loginWithDiscord);
router.get("/discord/callback", passport.authenticate("discord", { failureRedirect: "/login" }), (req, res) => {
  res.redirect("/");
});

router.get("/facebook", loginWithFacebook);
router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/login" }), (req, res) => {
  res.redirect("/");
});

module.exports = router;
