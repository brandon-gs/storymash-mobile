import React from 'react';
import {Avatar, HStack, Text, View, VStack} from 'native-base';
import {User} from '_interfaces/user';
import ButtonFollow from '_components/molecules/button-follow';
import useProfileStore from '_hooks/store/useProfileStore';
import ButtonSettings from '_components/molecules/button-settings';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({
  user: profileUser,
}: IProfileHeaderProps) {
  const {
    state: {profileLoadingFollowing},
    actions: {handleUserFollow},
    helpers: {isOwnProfile, isUserFollowing},
  } = useProfileStore({loadProfile: false});

  return (
    <View justifyContent={'center'} alignItems={'center'}>
      <VStack flex={1} w={400} alignItems={'center'} space={1.5} px={5} py={4}>
        {/* Follow user, user image, username and settings  */}
        <HStack justifyContent={'space-between'} w={400}>
          <ButtonFollow
            isOwnProfile={isOwnProfile}
            handlePress={handleUserFollow}
            isFollower={isUserFollowing}
            isLoading={profileLoadingFollowing}
          />

          <VStack>
            <Avatar
              size="xl"
              source={{
                uri: profileUser.image,
              }}
              mb={1}
            />
            <Text
              fontSize="xl"
              color="blue.500"
              _dark={{color: 'blue.400'}}
              textAlign={'center'}>
              @{profileUser.username}
            </Text>
          </VStack>

          <ButtonSettings />
        </HStack>

        {/* User Level */}
        <HStack alignItems={'center'}>
          <Text textAlign={'center'}>
            {`Nivel ${profileUser.level} (${profileUser.points} puntos) `}
          </Text>
          <Icon
            as={Ionicons}
            name="ellipse"
            size={'xs'}
            color={getColorFromLevel(profileUser.level)}
          />
        </HStack>

        {/* Followers info */}
        <HStack justifyContent="center">
          <Text>
            {`Seguidores (${profileUser.followers.length})  |  Seguidos (${profileUser.following.length})`}
          </Text>
        </HStack>

        {/* Profile about info */}
        <View alignItems="center">
          <Text textAlign={'justify'}>{profileUser.about}</Text>
        </View>
      </VStack>
    </View>
  );
}

export function getColorFromLevel(level: number): string {
  const colors = [
    '#ffb7c5',
    '#ff8fa7',
    '#eeaba2',
    '#080505',
    '#b5c6da',
    '#8ea7c6',
    '#7ac4e1',
    '#fff292',
    '#ffec5f',
    '#cee883',
    '#b4dd41',
    '#f781a4',
  ];
  return colors[level];
}
