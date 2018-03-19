module.exports = {
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json',
        },
    },
    moduleFileExtensions: [
        'ts',
        'js',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
    },
    testMatch: [
        // '**/test/**/*.test.(ts|js)',
        '**/test/**/*.test.(ts)',
    ],
    testEnvironment: 'node',
    forceExit: true,
    verbose: true,
    collectCoverage: true,
    bail: true,
};