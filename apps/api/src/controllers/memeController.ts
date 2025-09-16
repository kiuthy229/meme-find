import { Request, Response } from "express";
import { searchImages } from "../services/memeSearchService";

export async function crawlMemes(req: Request, res: Response) {
  try {
    const { keyword } = req.body;
    if (!keyword) {
      return res.status(400).json({ error: "Keyword required" });
    }

    const memes = await searchImages(`${keyword} meme`);

    // TODO: Save to DB
    // TODO: filter non-meme results

    return res.json(memes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error", details: err instanceof Error ? err.message : String(err) } );
  }
}

export function healthCheck(req: Request, res: Response) {
  return res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
}
