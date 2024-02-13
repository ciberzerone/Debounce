module.exports = {
    preset: 'ts-jest', // Usa ts-jest como preset
    testEnvironment: 'node', // Define el entorno de ejecución de las pruebas. Usa 'jsdom' para proyectos web
    roots: ['<rootDir>/src', '<rootDir>/tests'], // Especifica dónde buscar archivos de pruebas
    transform: {
      '^.+\\.ts$': 'ts-jest', // Transforma archivos TypeScript usando ts-jest
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$', // Patrón para encontrar archivos de pruebas
    moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Extensiones de archivo a manejar
  };
  