import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";

import {
    PORT,
    DATABASE,
    MAX_JSON_SIZE,
    REQUEST_NUMBER,
    REQUEST_TIME,
    URL_ENCODE,
    WEB_CACHE,
    FRONTEND_URL,
} from "./app/config/config.js";
import router from "./routes/api.js";


const app = express();

/// App Use Default Middleware
app.use(cors({
    origin: FRONTEND_URL,  // Allow the frontend URL (Vercel or localhost)
    credentials: true,
}));
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());
app.use(cookieParser());

/// App Use Limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

/// Cache
app.set("etag", WEB_CACHE);

/// Database Connect
mongoose
    .connect(DATABASE, { autoIndex: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(() => {
        console.log("MongoDB disconnected");
    });

/// App Use Routes
app.use("/api", router);

/// Serve Frontend
/// app.use(express.static("client/dist"));
/// app.get("*", (req, res) => {
///     res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
/// });

/// Start Server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
