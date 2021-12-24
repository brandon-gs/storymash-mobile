import React from 'react';
import {Icon, IconButton, IInputProps, Input} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IInputPasswordProps
  extends Omit<IInputProps, 'type' | 'InputRightElement'> {
  hide: boolean;
  onPressIcon?: () => void;
}

const InputPassword = React.forwardRef(
  ({hide, onPressIcon, ...props}: IInputPasswordProps, ref) => {
    const iconName = hide ? 'eye-outline' : 'eye-off-outline';
    const type = hide ? 'password' : 'text';

    return (
      <Input
        ref={ref}
        type={type}
        InputRightElement={
          <IconButton
            icon={<Icon as={Ionicons} name={iconName} size={5} />}
            mr={2}
            borderRadius="full"
            colorScheme="gray"
            onPress={onPressIcon}
          />
        }
        {...props}
      />
    );
  },
);

export default InputPassword;
