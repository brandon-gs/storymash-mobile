import {Story} from '_interfaces/story';
import {useCallback} from 'react';
import {Alert} from 'react-native';
import actions from '_store/actions';
import axios from '_utils/axios';
import useAuthenticationStore from '_hooks/store/useAuthenticationStore';
import useThunkDispatch from '_hooks/useThunkDispatch';

export type LikeActions = 'add' | 'remove' | '';

const useButtonLike = () => {
  const dispatch = useThunkDispatch();

  const {
    state: {user},
  } = useAuthenticationStore();

  const addOrRemoveLike = useCallback(
    async (story: Story, storyPartIndex: number) => {
      const userLikedBefore = story.parts[storyPartIndex].likes.includes(
        user._id,
      );

      const option: LikeActions = userLikedBefore ? 'remove' : 'add';

      if (user) {
        try {
          dispatch(
            actions.stories.likeStoryAction(
              story._id,
              storyPartIndex,
              option,
              user._id,
            ),
          );
          dispatch(
            actions.profile.likeProfileStory(
              story._id,
              storyPartIndex,
              option,
              user._id,
            ),
          );
          dispatch(
            actions.rank.likeStoryAction(
              story._id,
              storyPartIndex,
              option,
              user._id,
            ),
          );
          dispatch(
            actions.favorites.likeStoryAction(
              story._id,
              storyPartIndex,
              option,
              user._id,
            ),
          );
          dispatch(
            actions.plank.likeStoryAction(
              story._id,
              storyPartIndex,
              option,
              user._id,
            ),
          );
          dispatch(actions.story.likeStoryAction(option, user._id));
          await axios.put(
            `/story/part/like/${option}/${story._id}/${storyPartIndex}`,
            {
              option,
            },
          );
          // TODO: Create favorites reducer to add the story when user press like
          // TODO: Create profile reducer to update profile points, etc, when add like on her profile screen
          await dispatch(actions.favorites.getFavoritesStories(0));
          // dispatch(actions.updateProfile(data.author));
        } catch (error) {
          setTimeout(() => {
            Alert.alert('Error', 'Intentelo más tarde');
          }, 100);
        }
      }
    },
    [dispatch, user],
  );

  return {addOrRemoveLike};
};

export default useButtonLike;
