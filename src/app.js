import express from "express";
import morgan from "morgan";

// Routes
import languageRoutes from './routes/language.routes'
import personaRoutes from './routes/persona.routes'

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);
app.use("/api/personas", personaRoutes);

export default app;