import React from 'react';
import {HStack, Text, View, Icon, Button, Divider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SettingsItemProps {
  title: string;
  iconName: string;
  onPress: () => void;
}

const SettingsItem = ({iconName, title, onPress}: SettingsItemProps) => {
  return (
    <>
      <Button
        onPress={onPress}
        variant={'ghost'}
        rounded={'none'}
        justifyContent={'flex-start'}
        colorScheme="gray"
        leftIcon={
          <Icon as={Ionicons} name={iconName} size={'lg'} color={'blue.500'} />
        }
        _dark={{
          colorScheme: 'dark.50',
          _text: {
            color: 'gray.100',
          },
        }}>
        <Text fontSize="lg" color={'gray.900'} _dark={{color: 'gray.100'}}>
          {title}
        </Text>
      </Button>
      <Divider thickness={2} _dark={{bg: 'gray.700'}} />
    </>
  );
};

export default SettingsItem;
