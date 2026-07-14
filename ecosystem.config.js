module.exports = {
  apps: [
    {
      name: "meethi-chaat-web",
      script: "npm",
      args: "start",
      env: {
        PORT: 3005,
        NODE_ENV: "production"
      }
    }
  ]
};
