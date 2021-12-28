import React from 'react';
import {View, Icon, useToken} from 'native-base';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ICON_SIZE = 32;

interface ButtonFollowProps {
  isOwnProfile: boolean;
  isFollower: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  handlePress: () => Promise<void>;
}

export default function ButtonFollow({
  isOwnProfile,
  isFollower,
  isLoading = false,
  buttonStyle = {},
  handlePress,
}: ButtonFollowProps) {
  if (isLoading) {
    return (
      <View style={buttonStyle} height={ICON_SIZE}>
        <ActivityIndicator size={ICON_SIZE} color={'blue'} />
      </View>
    );
  }

  if (isOwnProfile) {
    return <View h="full" w={10} style={buttonStyle} />;
  }

  return (
    <View h={'full'} w={10} style={buttonStyle}>
      <TouchableOpacity onPress={handlePress}>
        <Icon
          as={Ionicons}
          name={isFollower ? 'person-remove' : 'person-add'}
          color={isFollower ? 'red.500' : 'blue.500'}
          _dark={{
            color: isFollower ? 'red.400' : 'blue.400',
          }}
          size={'lg'}
        />
      </TouchableOpacity>
    </View>
  );
}
