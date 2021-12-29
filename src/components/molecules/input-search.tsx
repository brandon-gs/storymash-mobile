import {HStack, Input} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import ButtonBack from '_components/atoms/button-back';

interface IInputSearch {
  onBackPress: () => void;
}

const {width} = Dimensions.get('screen');

const PR = 2; // Padding right

export default function InputSearch({onBackPress}: IInputSearch) {
  return (
    <HStack _dark={{bg: 'dark.50'}} px={2} alignItems={'center'}>
      <ButtonBack onPress={onBackPress} _stack={{pr: PR}} />
      <Input
        placeholder="Buscar"
        variant="filled"
        width={width - 48 - PR * 8}
        bg="gray.200"
        borderRadius="10"
        py="1"
        px="2"
        color="gray.700"
        placeholderTextColor="gray.500"
        _dark={{
          bg: 'gray.700',
          placeholderTextColor: 'gray.400',
          color: 'gray.100',
        }}
        _hover={{bg: 'gray.200', borderWidth: 0}}
        borderWidth="0"
      />
    </HStack>
  );
}
