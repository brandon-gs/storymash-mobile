import React from 'react';
import {Icon, HStack} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IButtonBack {
  onPress: () => void;
  _stack?: IHStackProps;
}

export default function ButtonBack({onPress, _stack = {}}: IButtonBack) {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack alignItems={'center'} {..._stack}>
        <Icon
          alignItems={'center'}
          justifyContent={'center'}
          as={Ionicons}
          name="arrow-back"
          color="blue.500"
          _dark={{color: 'gray.200'}}
        />
      </HStack>
    </TouchableOpacity>
  );
}
