import React, {useEffect, useState} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {HStack, Icon, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuthenticationStore from '_hooks/store/useAuthenticationStore';
import selectors from '_store/selectors';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import ButtonBack from '_components/atoms/button-back';

interface IHeaderProfileProps extends NativeStackHeaderProps {
  title: string;
  showEditProfile?: boolean;
}

export default function HeaderProfile({
  navigation,
  title,
  showEditProfile = false,
}: IHeaderProfileProps) {
  const {
    state: {user},
  } = useAuthenticationStore();

  const profileUser = useSelector(selectors.profile.selectProfileUser);

  const [canGoBack, setCanGoBack] = useState<boolean>(navigation.canGoBack());

  useEffect(() => {
    setCanGoBack(navigation.canGoBack());
  }, [navigation]);

  const isOwnProfile = user._id === profileUser._id;

  return (
    <HStack
      bg="gray.100"
      px={'3'}
      py={'1'}
      justifyContent={'space-between'}
      alignItems="center"
      borderBottomWidth={2}
      borderBottomColor={'gray.500'}
      _dark={{bg: 'dark.50'}}
      style={containerStyle}>
      <HStack space="4" alignItems={'center'} w="1/4">
        {canGoBack && <ButtonBack onPress={navigation.goBack} />}
      </HStack>
      <HStack w="2/4" justifyContent={'center'}>
        <Text fontWeight={'bold'} fontSize="xl">
          {title}
        </Text>
      </HStack>
      <HStack space="3" w="1/4" justifyContent={'flex-end'}>
        {isOwnProfile && showEditProfile && (
          <TouchableOpacity>
            <Icon as={Ionicons} name="create-outline" color="blue.500" />
          </TouchableOpacity>
        )}
      </HStack>
    </HStack>
  );
}

const containerStyle = {height: 58.1818};
