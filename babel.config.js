// This babel cnfig will be used not the built in parcel one

module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', {runtime: "automatic"}],
    ],
  };

