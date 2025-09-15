type SearchBarProps = {
  keyword: string;
  setKeyword: (keyword: string) => void;
  loading: boolean;
  handleSearch: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  keyword,
  setKeyword,
  loading,
  handleSearch,
  handleKeyPress,
}: SearchBarProps) {
  return (
    <>
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='Enter meme keyword'
        className='w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <button
        onClick={handleSearch}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </>
  );
}
