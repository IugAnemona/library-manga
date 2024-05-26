import { useState } from 'react';
import { InputWithDebounce } from '../InputSearch';
import { MangaDataType } from '@/api/models/manga.interface';
import { mangaSearch } from '@/api/mangaApi';
import { TopMangaCard } from '../TopMangasCarousel/TopMangaCard';

export function SearchManga() {
  const [mangas, setMangas] = useState<MangaDataType | null>(null);

  async function logData(data: string) {
    const response = await mangaSearch(data);
    setMangas(response);
  }

  return (
    <div className="mt-24">
      <InputWithDebounce onChange={logData} value={''} />
      <div className="mt-6 flex flex-wrap gap-3">
        {mangas?.data.map((manga, index) => {
          return (
            <div className="w-56" key={manga.mal_id + index}>
              <TopMangaCard manga={manga} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
