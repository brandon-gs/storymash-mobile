import {Paginate} from '_interfaces/global';
import {Story} from '_interfaces/story';
import {User} from '_interfaces/user';
import {SearchState} from '_store/types/search.types';
import {getQueryPagination} from '_utils/services';
import axios from '_utils/axios';

export const getSearchResults = async (query: string) => {
  const paginationParams = getQueryPagination(9, 0);
  const stories = await axios.get(`/story/search/${query}?${paginationParams}`);
  const profiles = await axios.get(`/user/search/${query}?${paginationParams}`);
  return {
    profiles: profiles.data.users,
    stories: stories.data.stories,
  } as SearchState;
};

export const getStoriesByQuery = async (
  query: string,
  currentLimit: number,
  currentPage: number,
) => {
  const pagination = getQueryPagination(currentLimit, currentPage);
  const {data} = await axios.get(`/story/search/${query}?${pagination}`);
  return data.stories as Paginate<Story>;
};

export const getProfilesByQuery = async (
  query: string,
  currentLimit: number,
  currentPage: number,
) => {
  const pagination = getQueryPagination(currentLimit, currentPage);
  const {data} = await axios.get(`/user/search/${query}?${pagination}`);
  return data.users as Paginate<User>;
};
