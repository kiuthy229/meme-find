# Meme Find

![App Banner](./demo1.png)

## Introduction

**Meme Find** is a web application that lets users search and discover memes from the internet. It combines AI-assisted search and Google Image search to find relevant memes based on user keywords. The app stores results in a PostgreSQL database for quick retrieval and future semantic search using AI embeddings.

Key features include:

- Search memes by keyword (e.g., "cat", "banana cat")
- Crawl images from Google Custom Search
- Save memes in a PostgreSQL database via Prisma
- Display memes in a responsive, grid-based React frontend
- Optional AI-powered embedding for semantic search

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend / Crawler API:** Node.js, Express, Axios
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **AI / Optional:** OpenAI for generating embeddings or suggestions

---

## Screenshots

![Search Bar UI](./demo2.png)

> Replace the above image paths with actual screenshots from your app.

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm
- PostgreSQL (Supabase or local)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/meme-find.git
cd meme-find
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

In `packages/db`
```bash
# Direct connection to the database. Used for migrations
DIRECT_URL="copy from supabase"

# Connect to Supabase via connection pooling
DATABASE_URL="copy from supabase"

```

In `apps/api`
```bash
DATABASE_URL="postgresql://username:password@host:5432/dbname?sslmode=require"
GOOGLE_API_KEY="your-google-api-key"
SEARCH_ENGINE_ID="your-custom-search-engine-id"
```

4. Generate Prisma client and migrate database
  
```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Run the backend server

```bash
npx ts-node packages/crawler/src/server.ts
```

6. Run the frontend
```bash
npm run dev
```

7. Open the app at `http://localhost:5173`

# Usage
- Enter a keyword in the search bar
- Click Search or press Enter
- Memes matching your keyword will be displayed in a grid
- The backend saves results in PostgreSQL for future retrieval