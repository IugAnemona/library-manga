export interface MangaDataType {
  data: Array<MangaType>;
  pagination: PaginationType;
}

interface PaginationType {
  last_visible_page: number;
  has_next_page: boolean;
  items: ItemsPaginationType;
}

interface ItemsPaginationType {
  count: number;
  total: number;
  per_page: number;
}

export interface MangaType {
  mal_id: number;
  url: string;
  images: ImagesType;
  approved: boolean;
  titles: Array<TitlesType>;
  titles_synonyms: Array<string>;
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: Published;
  score: number;
  scored_by: number;
  scored: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Array<GlobalObject>;
  serialization: Array<GlobalObject>;
  genres: Array<GlobalObject>;
  explicit_genres: Array<GlobalObject>;
  themes: Array<GlobalObject>;
  demographics: Array<GlobalObject>;
}

interface ImagesExtensionType {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface ImagesType {
  jpg: ImagesExtensionType;
  webp: ImagesExtensionType;
}

interface TitlesType {
  type: string;
  title: string;
}

interface DateType {
  day: number;
  month: number;
  year: number;
}

interface PropPublishedType {
  from: DateType;
  to: DateType;
  string: string;
}

interface Published {
  from: string;
  to: string;
  prop: PropPublishedType;
}

interface GlobalObject {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
