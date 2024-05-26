import { GlobalObject } from '@/api/models/manga.interface';

interface MangaInfoListType {
  array: Array<GlobalObject>;
  title: string;
}

export function MangaInfoList({ array, title }: MangaInfoListType) {
  return (
    <div className="flex mb-2 border-b-2 border-slate-700">
      <h2 className="mr-2">{title}:</h2>
      <ul className="grid grid-cols-2">
        {array.map((object) => {
          return (
            <li className="mr-4" key={object.mal_id}>
              {object.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
