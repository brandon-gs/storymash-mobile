import React from 'react';
import {Avatar, HStack, Icon, Text, View} from 'native-base';
import useAuthenticationStore from '_hooks/store/useAuthenticationStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderAuth() {
  const {
    state: {user},
  } = useAuthenticationStore();

  return (
    <HStack
      bg="gray.100"
      _dark={{bg: 'dark.50'}}
      px={1}
      justifyContent={'space-between'}
      alignItems={'center'}
      borderBottomColor={'gray.500'}
      borderBottomWidth={1}>
      <Text color="blue.500" fontSize={'lg'} fontWeight={'black'}>
        Storymash
      </Text>
      <HStack>
        <View>
          <Icon
            as={Ionicons}
            name="notifications-outline"
            size={'lg'}
            color="blue.500"
          />
        </View>
        <View>
          <Icon
            as={Ionicons}
            name="notifications-outline"
            size={'lg'}
            color="blue.500"
          />
        </View>
        <View>
          <Avatar source={{uri: user.image}} size={'lg'} />
        </View>
      </HStack>
    </HStack>
  );
}
