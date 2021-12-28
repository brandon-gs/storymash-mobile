import {Text} from 'native-base';
import React from 'react';
import {RefreshControl} from 'react-native';
import ActivityIndicatorRPC from '_components/atoms/activity-indicator-rpc';
import LoadingScreen from '_components/atoms/loading-screen';
import StyledScrollView from '_components/atoms/styled-scrollview';
import ThemeToggle from '_components/atoms/theme-toggle';
import ProfileHeader from '_components/organisms/Profile/profile-header';
import useProfileStore from '_hooks/store/useProfileStore';

export default function ProfileScreen() {
  const {
    state: {profileUser},
    actions: {getProfileData},
    helpers: {profileLoading},
  } = useProfileStore({loadProfile: true});

  const refreshControl = (
    <RefreshControl refreshing={profileLoading} onRefresh={getProfileData} />
  );

  if (profileLoading) {
    return <LoadingScreen />;
  }

  if (profileUser._id) {
    return (
      <StyledScrollView refreshControl={refreshControl}>
        <ProfileHeader user={profileUser} />
        <ThemeToggle />
      </StyledScrollView>
    );
  }

  return (
    <StyledScrollView refreshControl={refreshControl}>
      <Text>No se puedo cargar el perfil</Text>
    </StyledScrollView>
  );
}
