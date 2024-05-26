import { MangaType } from '@/api/models/manga.interface';
import { MangaInfoItem } from '@/components/MangaInfoItem';
import { MangaInfoList } from '@/components/MangaInfoList';
import { useLoaderData } from 'react-router-dom';

export default function MangaInfoPage() {
  const manga = useLoaderData() as MangaType;

  return (
    <div className="flex gap-6 max-w-7xl m-auto shadow-md">
      <div className="p-2">
        <img className="h-[400px]" src={manga.images.webp.large_image_url}></img>
      </div>
      <div>
        <MangaInfoItem info={manga.title} title="Title" />

        <MangaInfoItem info={manga.status} title="Status" />

        <MangaInfoList title="Genres" array={manga.genres} />

        <MangaInfoList title="Authors" array={manga.authors} />

        <MangaInfoItem info={manga.chapters ? String(manga.chapters) : 'null'} title="Chapters" />

        <MangaInfoItem info={manga.volumes ? String(manga.volumes) : 'null'} title="Volumes" />

        <MangaInfoItem info={String(manga.rank)} title="Rank" />

        <MangaInfoList title="Themes" array={manga.themes} />
      </div>
    </div>
  );
}
