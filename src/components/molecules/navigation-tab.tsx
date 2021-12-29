import React, {useState} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  Dimensions,
  Keyboard,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {HStack, Icon, Text, View} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const NavigationTab = ({navigation, state, descriptors}: BottomTabBarProps) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  /** Show TabNavigation when keyboard is closed */
  React.useEffect(() => {
    const keyboadrDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboadrDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  /** If keyboard is open dont show TabNavigation */
  if (isKeyboardVisible) {
    return null;
  }

  return (
    <HStack
      bg="gray.100"
      w="full"
      borderTopWidth={0.5}
      borderColor="gray.300"
      justifyContent="space-evenly"
      _dark={{bg: 'dark.50', borderColor: 'gray.400'}}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const iconName = getIconName(index, isFocused);

        const {options} = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tabBarIconStyles = options.tabBarIconStyle
          ? (options.tabBarStyle as StyleProp<ViewStyle>)
          : {};

        const hasTitle = TITLES[route.name];

        return (
          <TouchableOpacity
            key={`icon-tabbar-${index}-${iconName}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View
              justifyContent={'center'}
              alignItems={'center'}
              pb={1}
              pt={2}
              px={5}>
              <Icon
                as={Ionicons}
                name={iconName}
                color={isFocused ? 'blue.500' : 'gray.500'}
                style={[tabBarIconStyles]}
                size={hasTitle ? 'sm' : 'lg'}
              />
              {hasTitle && <Text fontSize="xs">{TITLES[route.name]}</Text>}
            </View>
          </TouchableOpacity>
        );
      })}
    </HStack>
  );
};

export const SIZE = width / 5 - 10.7;

const TITLES: Record<string, string> = {
  Home: 'Inicio',
  Plank: 'Siguiendo',
  Favorites: 'Favoritas',
  Rank: 'Ranking',
};

const ICONS = ['home', 'bookmarks', 'add-circle', 'heart', 'stats-chart'];

const getIconName = (index: number, isFocused: boolean) => {
  if (ICONS[index]) {
    const outline = !isFocused ? '-outline' : '';
    return ICONS[index] + outline;
  }
  // Return home icon by default in case index doesn't exist in ICONS
  return ICONS[0];
};

export default NavigationTab;
