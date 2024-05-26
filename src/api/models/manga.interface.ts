export interface MangaDataType {
  data: Array<MangaType>;
  pagination: PaginationType;
}

export interface PaginationType {
  last_visible_page: number;
  has_next_page: boolean;
  items: ItemsPaginationType;
}

export interface ItemsPaginationType {
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
  serializationsexport: Array<GlobalObject>;
  genres: Array<GlobalObject>;
  explicit_genres: Array<GlobalObject>;
  themes: Array<GlobalObject>;
  demographics: Array<GlobalObject>;
}

export interface ImagesExtensionType {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface ImagesType {
  jpg: ImagesExtensionType;
  webp: ImagesExtensionType;
}

export interface TitlesType {
  type: string;
  title: string;
}

export interface DateType {
  day: number;
  month: number;
  year: number;
}

export interface PropPublishedType {
  from: DateType;
  to: DateType;
  string: string;
}

export interface Published {
  from: string;
  to: string;
  prop: PropPublishedType;
}

export interface GlobalObject {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
