type MemeCardProps = {
  id: number;
  title: string;
  imageUrl: string;
  crawledAt: string;
};

export default function MemeCard({ imageUrl, title }: MemeCardProps) {
  return (
    <div className='rounded-xl shadow-md border bg-white min-w-52'>
      <div className='flex rounded-t-xl min-h-52 bg-white py-2 border-b text-sm text-gray-500 items-center'>
        <img src={imageUrl} alt={title} className='w-full object-cover ' />
      </div>
      <div className='p-2 h-40 overflow-hidden'>
        <h2 className='font-bold text-lg max-h-32 text-ellipsis'>{title}</h2>
      </div>
    </div>
  );
}
