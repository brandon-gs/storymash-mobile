module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
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
    },
  },
};
