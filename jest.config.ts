import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "jest-environment-node", 
  verbose: true, 
  transform: { 
  "^.+\\.tsx?$": "ts-jest", 
  }, 
};

export default config;