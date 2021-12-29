import React, {useState} from 'react';
import {Avatar, HStack, Icon, Text, View} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import InputSearch from '_components/molecules/input-search';
import {User} from '_interfaces/user';
import {isEqual} from 'lodash';

export type IHeaderAuth = BottomTabHeaderProps | NativeStackHeaderProps;

interface IHeaderAuthProps {
  user: User;
  goToProfileScreen: (username: string) => void;
}

function HeaderAuth({user, goToProfileScreen}: IHeaderAuthProps) {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  return (
    <>
      <HStack
        bg="gray.100"
        _dark={{bg: 'dark.50'}}
        py={2}
        justifyContent={'space-between'}
        alignItems={'center'}
        borderBottomColor={'gray.500'}
        borderBottomWidth={1}>
        {showSearchBar ? (
          <InputSearch onBackPress={() => setShowSearchBar(() => false)} />
        ) : (
          <>
            <HStack alignItems="center" px={3}>
              <Text color="blue.500" fontSize={'2xl'} fontWeight={'black'}>
                Storymash
              </Text>
            </HStack>
            <HStack alignItems={'center'}>
              <View px={1} mx={2}>
                <TouchableOpacity onPress={() => setShowSearchBar(() => true)}>
                  <Icon
                    as={Ionicons}
                    name="search"
                    size={'md'}
                    color="blue.500"
                    _dark={{color: 'gray.200'}}
                  />
                </TouchableOpacity>
              </View>
              <View px={1} mx={2}>
                <Icon
                  as={Ionicons}
                  name="notifications-outline"
                  size={'md'}
                  color="blue.500"
                  _dark={{
                    color: 'gray.200',
                  }}
                />
              </View>
              <View px={1} mx={2}>
                <TouchableOpacity
                  onPress={() => goToProfileScreen(user.username)}>
                  <Avatar source={{uri: user.image}} size={'sm'} />
                </TouchableOpacity>
              </View>
            </HStack>
          </>
        )}
      </HStack>
    </>
  );
}

export default React.memo(HeaderAuth, (prev, next) => {
  return isEqual(prev, next);
});
