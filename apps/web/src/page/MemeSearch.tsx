import { useState } from 'react';
import axios from 'axios';
import MemeCard from '../components/MemeCard';
import SearchBar from '../components/SearchBar';

export default function MemeSearch() {
  const [keyword, setKeyword] = useState('');
  const [memes, setMemes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!keyword) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/crawl', { keyword });
      setMemes(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <div className='flex gap-2'>
        <SearchBar
          keyword={keyword}
          setKeyword={setKeyword}
          loading={loading}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
        />
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10 sm:gap-4 mt-4'>
        {memes.map((meme, idx) => (
          <MemeCard key={idx} {...meme} />
        ))}
      </div>
    </div>
  );
}
