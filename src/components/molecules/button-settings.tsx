import React from 'react';
import {View, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuthenticationStore from '_hooks/store/useAuthenticationStore';
import useProfileStore from '_hooks/store/useProfileStore';
import useNavigationScreens from '_hooks/useNavigationScreens';

export default function ButtonSettings() {
  const {
    state: {user},
  } = useAuthenticationStore();
  const {
    state: {profileUser},
  } = useProfileStore({loadProfile: false});

  const isOwnProfile = user._id === profileUser._id;

  const {goToSettingsScreen} = useNavigationScreens();

  if (!isOwnProfile) {
    return <View h="full" w={10} />;
  }

  return (
    <View h="full" w={10}>
      <TouchableOpacity onPress={goToSettingsScreen}>
        <Icon
          as={Ionicons}
          name="settings-outline"
          color={'gray.500'}
          _dark={{
            color: 'gray.400',
          }}
          size={'lg'}
        />
      </TouchableOpacity>
    </View>
  );
}
