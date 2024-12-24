module.exports =  {
  transform: {
    "^.+\\.js$": "babel-jest", // Use babel-jest to transpile JavaScript files
  },
  testEnvironment: "node", // Or 'jsdom' depending on your test environment
};
