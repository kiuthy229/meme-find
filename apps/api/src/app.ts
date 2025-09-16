import express from "express";
import cors from "cors";
import { crawlMemes, healthCheck } from "./controllers/memeController";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/health", healthCheck);
app.post("/crawl", crawlMemes);

export default app;
