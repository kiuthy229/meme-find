import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY!;
const CX = process.env.SEARCH_ENGINE_ID!;

export async function searchImages(keyword: string) {
  if (!API_KEY || !CX) {
    throw new Error("Missing GOOGLE_API_KEY or SEARCH_ENGINE_ID in env");
  }

  const res = await axios.get("https://www.googleapis.com/customsearch/v1", {
    params: {
      key: API_KEY,
      cx: CX,
      q: keyword,
      searchType: "image",
      num: 10,
    },
  });

  const items = res.data.items || [];
  return items.map((item: any) => ({
    title: item.title,
    imageUrl: item.link,
  }));
}
