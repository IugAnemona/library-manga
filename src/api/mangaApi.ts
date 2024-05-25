import apiJikan from './axiosConfig';
import { MangaDataType } from './models/manga.interface';

async function getTopMangas(): Promise<MangaDataType> {
  const response = await apiJikan.get<MangaDataType>('/top/manga?limit=10');
  const topMangas = response.data;
  return topMangas;
}

export { getTopMangas };
