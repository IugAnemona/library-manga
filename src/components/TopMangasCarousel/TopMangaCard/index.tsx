import { MangaType } from '@/api/models/manga.interface';
import React from 'react';

interface TopMangaProps {
  manga: MangaType;
}

export const TopMangaCard: React.FC<TopMangaProps> = ({ manga }) => {
  return (
    <div className="max-w-80 flex flex-col items-center">
      <div className="">
        <img className="h-40 md:h-50 border-b-2 border-slate-900" src={manga.images.jpg.image_url} />
      </div>

      <div className=" text-center mt-4">
        <h2 className="m-0 w-full text-sm text-gray-800 font-bold">{manga.title}</h2>
      </div>
    </div>
  );
};
