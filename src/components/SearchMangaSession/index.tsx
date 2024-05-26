import { useState } from 'react';
import { InputWithDebounce } from '../InputSearch';
import { MangaDataType } from '@/api/models/manga.interface';
import { mangaSearch } from '@/api/mangaApi';
import { CardSearch } from '../CardSearch';

export function SearchManga() {
  const [mangas, setMangas] = useState<MangaDataType | null>(null);

  async function logData(data: string) {
    const response = await mangaSearch(data);
    setMangas(response);
  }

  return (
    <div className="mt-24  rounded-md">
      <InputWithDebounce onChange={logData} value={''} />
      <div className="mt-6 flex flex-wrap gap-6 justify-center px-2 py-6 bg-gray-800 rounded-md">
        {mangas?.data.map((manga, index) => {
          return (
            <div className="" key={manga.mal_id + index}>
              <CardSearch manga={manga} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
