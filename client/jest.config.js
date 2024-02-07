module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/**/*.test.tsx', '**/*.test.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts', '!src/**/*.d.ts', '!src/**/*.test.tsx', '!src/**/*.test.ts', '!src/index.tsx', '!src/index.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'clover'],
};
