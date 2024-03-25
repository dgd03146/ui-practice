export default {
  '^.+\\.tsx?$': ['ts-jest'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
