// debounce.test.ts

import { debounce } from '../src/debounce';
describe('debounce', () => {
  it('retarda la llamada de la función pasada como argumento', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled(); // La función no se ha llamado inmediatamente

    jest.runAllTimers(); // Avanza todos los temporizadores
    expect(func).toHaveBeenCalledTimes(1); // Ahora la función debe haber sido llamada
  });

  it('no ejecuta la función objetivo más de una vez dentro del período especificado', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.runAllTimers(); // Avanza todos los temporizadores
    expect(func).toHaveBeenCalledTimes(1); // La función objetivo debe haberse llamado solo una vez
  });
});
