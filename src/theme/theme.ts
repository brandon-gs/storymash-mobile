import {Appearance} from 'react-native';
import {ColorModeOptions, extendTheme} from 'native-base';
import {fontConfig, fonts} from './font';

/**
 * Default color scheme from device
 */
const colorScheme = Appearance.getColorScheme() || 'light';

const config: ColorModeOptions = {
  useSystemColorMode: false,
  initialColorMode: colorScheme,
};

const customTheme = extendTheme({
  config,
  fontConfig,
  fonts,
  components: {
    Text: {
      defaultProps: {
        fontSize: 'md',
      },
    },
    Button: {
      baseStyle: {
        rounded: 'full',
      },
      defaultProps: {
        colorScheme: 'blue',
        _text: {
          fontSize: 'md',
        },
      },
    },
    FormControlLabel: {
      defaultProps: {
        _text: {
          fontSize: 'md',
        },
      },
    },
    Select: {
      defaultProps: {
        variant: 'rounded',
        fontSize: 'md',
      },
    },
    Input: {
      defaultProps: {
        variant: 'rounded',
        fontSize: 'md',
        _focus: {
          borderColor: 'blue.500',
        },
      },
    },
  },
});

// Add typescript support
// Get the type of the CustomTheme
type CustomThemeType = typeof customTheme;

// Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default customTheme;
