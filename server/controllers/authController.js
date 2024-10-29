const passport = require("passport");
const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const DiscordStrategy = require("passport-discord").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

// Configuración de Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Aquí debes implementar la lógica para encontrar o crear un usuario
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({ googleId: profile.id, username: profile.displayName, email: profile.emails[0].value });
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Configuración de Discord Strategy
passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/discord/callback",
      scope: ["identify", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ discordId: profile.id });
        if (!user) {
          user = await User.create({ discordId: profile.id, username: profile.username, email: profile.email });
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Configuración de Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ facebookId: profile.id });
        if (!user) {
          user = await User.create({ facebookId: profile.id, username: profile.displayName, email: profile.emails[0].value });
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serializar el usuario
passport.serializeUser((user, done) => {
  done(null, user.id); // Serializa el id del usuario
});

// Deserializar el usuario
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // Deserializa el usuario
  } catch (error) {
    done(error, null);
  }
});

// Exporta los métodos para los handlers en authRoutes.js
module.exports = {
  loginWithGoogle: passport.authenticate("google", { scope: ["profile", "email"] }),
  loginWithDiscord: passport.authenticate("discord"),
  loginWithFacebook: passport.authenticate("facebook"),
};
