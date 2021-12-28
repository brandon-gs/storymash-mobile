import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useColorMode, useToken, View} from 'native-base';

export interface ILoadingScreenProps {}

export default function LoadingScreen({}: ILoadingScreenProps) {
  const {colorMode} = useColorMode();
  const [darkColor] = useToken('colors', ['dark.50']);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      bgColor={'gray.100'}
      _dark={{bgColor: 'dark.50'}}>
      <ActivityIndicator
        size="large"
        color={colorMode === 'dark' ? 'gray.100' : darkColor}
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: 10000,
          alignItems: 'center',
        }}
      />
    </View>
  );
}
