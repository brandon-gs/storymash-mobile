import React from 'react';
import {Text, HStack, Switch, useColorMode} from 'native-base';

export default function ThemeToggle() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Modo oscuro</Text>
      <Switch
        onTrackColor="blue.100"
        onThumbColor="blue.500"
        isChecked={colorMode === 'dark'}
        onToggle={toggleColorMode}></Switch>
    </HStack>
  );
}
