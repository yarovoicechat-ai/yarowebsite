module.exports = {
  apps: [
    {
      name: "yaro-web",
      script: "npm",
      args: "start",
      env: {
        PORT: 3105,
        NODE_ENV: "production"
      }
    }
  ]
};
