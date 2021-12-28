import {StoriesState} from '_store/types/stories.types';
import axios from '_utils/axios';

export const getRankStories = async (
  currentLimit: number,
  currentPage: number,
) => {
  const url = `/story/rank?limit=${currentLimit}&page=${currentPage}&offset=${
    currentPage * currentLimit
  }`;
  const {data} = await axios.get(url);
  return data as StoriesState;
};
