function config(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          ['module-resolver', {
            root: ['./src'],
            alias: {
              '@screens': './screens',
              '@components': './components',
              '@config': './config',
              '@assets': './assets',
            },
          }],
        ],
      },
    },
  };
}