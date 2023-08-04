module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        moduleResolver,
        'transform-remove-console',
        'react-native-reanimated/plugin',
      ],
    },
    development: {
      plugins: [moduleResolver, 'react-native-reanimated/plugin'],
    },
  },
};
