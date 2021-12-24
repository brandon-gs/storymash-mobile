module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _hooks: './src/hooks',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _services: './src/services',
          _utils: './src/utils',
          _theme: './src/theme',
          _interfaces: './src/interfaces',
          _store: './src/store',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
  ],
};
