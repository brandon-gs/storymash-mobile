import React, {useState} from 'react';
import {Text, HStack, Switch, useColorMode, Divider, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ThemeToggle() {
  const {colorMode, toggleColorMode} = useColorMode();

  const [isChecked, setIsChecked] = useState<boolean>(colorMode === 'dark');

  const changeColorMode = async () => {
    toggleColorMode();
    setIsChecked(prev => !prev);
  };

  return (
    <>
      <HStack
        style={{height: 56}}
        px={4}
        space={2}
        bgColor={'gray.100'}
        _dark={{
          bgColor: 'dark.50',
        }}
        alignItems="center"
        justifyContent={'space-between'}>
        <HStack h={'full'} alignItems={'center'} space={3}>
          <Icon
            as={Ionicons}
            name="moon"
            size={'md'}
            color={'blue.500'}
            _dark={{color: 'blue.400'}}
          />
          <Text>Modo oscuro</Text>
        </HStack>
        <Switch
          onTrackColor="blue.100"
          onThumbColor="blue.500"
          isChecked={isChecked}
          onToggle={changeColorMode}
        />
      </HStack>
      <Divider thickness={2} />
    </>
  );
}
