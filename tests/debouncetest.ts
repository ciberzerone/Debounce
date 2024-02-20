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



it('pasa los argumentos correctos a la función objetivo', done => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 100);

  debouncedFunc('argumento1', 'argumento2');

  setTimeout(() => {
    expect(func).toHaveBeenCalledWith('argumento1', 'argumento2');
    done();
  }, 1000); // Espera más tiempo que el debounce para asegurar que se ejecuta
});
