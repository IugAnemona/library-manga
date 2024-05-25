import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { TopMangaCard } from './TopMangaCard';
import { Link, useLoaderData } from 'react-router-dom';
import { MangaDataType } from '@/api/models/manga.interface';
import Autoplay from 'embla-carousel-autoplay';

export function TopMangasCarousel() {
  const mangasList = useLoaderData() as MangaDataType;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: 'start',
      }}
      className="w-full max-w-5xl m-auto"
    >
      <CarouselContent>
        {mangasList.data.map((manga, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/6"
          >
            <Link to={`https://myanimelist.net/manga/${manga.mal_id}`}>
              <TopMangaCard manga={manga} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
