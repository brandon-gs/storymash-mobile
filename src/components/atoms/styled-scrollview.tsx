import {ScrollView, IScrollViewProps} from 'native-base';
import React from 'react';

export default function StyledScrollView({
  children,
  ...props
}: IScrollViewProps) {
  return (
    <ScrollView
      flex={1}
      bgColor={'gray.100'}
      _contentContainerStyle={{flexGrow: 1}}
      _dark={{bgColor: 'dark.50'}}
      {...props}>
      {children}
    </ScrollView>
  );
}
