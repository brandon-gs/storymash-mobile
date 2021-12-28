import {View} from 'native-base';
import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

export interface IActivityIndicatorRPC {
  children: (
    loading: boolean,
    setLoading: (loading: boolean) => void,
  ) => React.ReactNode;
}

export default function ActivityIndicatorRPC({
  children,
}: IActivityIndicatorRPC) {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      {children(loading, setLoading)}
      {loading ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          bg="gray.100">
          <ActivityIndicator
            size="large"
            color="black"
            style={{
              ...StyleSheet.absoluteFillObject,
              zIndex: 10000,
              alignItems: 'center',
            }}
          />
        </View>
      ) : null}
    </>
  );
}
