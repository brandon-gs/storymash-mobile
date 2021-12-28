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
        leftIcon={
          <Icon as={Ionicons} name={iconName} size={'lg'} color={'blue.500'} />
        }
        _dark={{
          colorScheme: 'dark.50',
        }}>
        <Text>{title}</Text>
      </Button>
      <Divider thickness={2} />
    </>
  );
};

export default SettingsItem;
