import apiJikan from './axiosConfig';
import { MangaDataType, MangaType } from './models/manga.interface';

async function getTopMangas(): Promise<MangaDataType> {
  const response = await apiJikan.get('/top/manga?limit=10');
  const topMangas: MangaDataType = response.data;
  return topMangas;
}

async function mangaInfoLoader(mangaId: string | undefined) {
  const id = Number(mangaId);
  const response = await apiJikan.get(`/manga/${id}/full`);
  const mangaInfo: MangaType = response.data.data;
  return mangaInfo;
}

async function mangaSearch(query: string) {
  const response = await apiJikan.get(`/manga?q=${query}`);
  const mangaInfo: MangaDataType = response.data;
  return mangaInfo;
}

export { getTopMangas, mangaInfoLoader, mangaSearch };
