import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.GOOGLE_API_KEY;
const CX = process.env.SEARCH_ENGINE_ID;

if (!API_KEY || !CX) {
  console.error('⚠️ Missing API_KEY or CX in env');
  process.exit(1);
}

// Function to search images
async function searchImages(keyword: string) {
  const res = await axios.get('https://www.googleapis.com/customsearch/v1', {
    params: {
      key: API_KEY,
      cx: CX,
      q: keyword,
      searchType: 'image',
      num: 3,
    },
  });

  const items = res.data.items || [];
  return items.map((item: any) => ({
    title: item.title,
    imageUrl: item.link,
  }));
}

app.post('/crawl', async (req, res) => {
  try {
    const { keyword } = req.body;
    if (!keyword) return res.status(400).json({ error: 'Keyword required' });

    const memes = await searchImages(`${keyword} meme`);

    // TODO: Save to DB - Search from DB if existed
    // TODO: exclude results other than memes
    // for (const meme of memes) {
    //   await prisma.meme.create({
    //     data: { title: meme.title, imageUrl: meme.imageUrl, tags: [], embedding: {} },
    //   });
    // }

    res.json(memes);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Crawler API running on port ${PORT}`));
