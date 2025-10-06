import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import 'dotenv/config';
import aiRoutes from "./routes/aiRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Fix for ES module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

// ✅ Relax CSP (so fonts/scripts work)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; connect-src 'self' http://localhost:5000;"
  );
  next();
});

// ✅ API routes
app.use("/api", aiRoutes);

// ✅ Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
