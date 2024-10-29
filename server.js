const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("./server/middleware/passportConfig"); // Asegúrate de que la ruta sea correcta
const authRoutes = require("./server/routes/authRoutes"); // Rutas de autenticación
const cors = require('cors'); // Importar el paquete cors
const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Middleware de sesiones
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Inicializar Passport y usar sesiones
app.use(passport.initialize());
app.use(passport.session());

// Usar las rutas de autenticación
app.use("/auth", authRoutes);

// Resto de tu código...
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
