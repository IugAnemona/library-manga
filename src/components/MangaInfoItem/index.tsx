interface MangaInfoItemType {
  info: string;
  title: string;
}

export function MangaInfoItem({ info, title }: MangaInfoItemType) {
  return (
    <div className="flex mb-2 border-b-2 border-slate-700">
      <h2 className="mr-2">{title}:</h2>
      {info}
    </div>
  );
}
