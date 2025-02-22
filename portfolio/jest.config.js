module.exports = {
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy", // Para ignorar arquivos CSS
  },
  testEnvironment: "jsdom", // Se estiver testando componentes React
};
