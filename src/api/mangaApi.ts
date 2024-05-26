import apiJikan from './axiosConfig';
import { MangaDataType } from './models/manga.interface';

async function getTopMangas(): Promise<MangaDataType> {
  const response = await apiJikan.get<MangaDataType>('/top/manga?limit=10');
  const topMangas = response.data;
  return topMangas;
}

async function mangaInfoLoader(mangaId: string | undefined) {
  const id = Number(mangaId);
  const response = await apiJikan.get<MangaDataType>(`/manga/${id}/full`);
  const mangaInfo = response.data.data;
  return mangaInfo;
}

export { getTopMangas, mangaInfoLoader };
