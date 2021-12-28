import {StoriesState} from '_store/types/stories.types';
import axios from '_utils/axios';

export const getFavoritesStories = async (
  currentLimit: number,
  currentPage: number,
) => {
  const url = `/story/favorites?limit=${currentLimit}&page=${currentPage}&offset=${
    currentPage * currentLimit
  }`;
  const {data} = await axios.get(url);
  return data as StoriesState;
};
