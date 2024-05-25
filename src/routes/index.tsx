import { TopMangasCarousel } from '@/components/TopMangasCarousel';

export default function Index() {
  return (
    <div className="px-16 md:w-full md:px-28 ">
      <div className="mb-10 text-center">
        <h1 className="text-4xl">Top mangas</h1>
      </div>
      <TopMangasCarousel />
    </div>
  );
}
