export default {
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
    testEnvironment: "jsdom",
    preset: 'ts-jest',
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    }
};