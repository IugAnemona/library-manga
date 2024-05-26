import { MangaType } from '@/api/models/manga.interface';
import { Link } from 'react-router-dom';

interface CardSearchProps {
  manga: MangaType;
}

export function CardSearch({ manga }: CardSearchProps) {
  return (
    <div className="w-96 h-52 flex flex-col justify-center gap-2 bg-neutral-50 rounded-lg shadow p-2">
      <div className="flex gap-2">
        <img src={manga.images.webp.image_url} className="bg-neutral-500 w-24 h-36 shrink-0 rounded-lg" alt="" />
        <div className="flex flex-col gap-3">
          <span className="font-bold text-neutral-700 italic line-clamp-1 ">{manga.title}</span>
          <p className="line-clamp-3">{manga.synopsis}</p>
        </div>
      </div>
      <Link to={`manga/${manga.mal_id}`}>
        <div className="hover:bg-indigo-700 text-center bg-indigo-500 font-bold text-neutral-50 rounded p-2">
          See more
        </div>
      </Link>
    </div>
  );
}
