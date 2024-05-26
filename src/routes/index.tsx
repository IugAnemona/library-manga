import { SearchManga } from '@/components/SearchMangaSession';
import { TopMangasCarousel } from '@/components/TopMangasCarousel';

export default function Index() {
  return (
    <div>
      <TopMangasCarousel />
      <SearchManga />
    </div>
  );
}
