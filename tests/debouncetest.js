"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debounce_1 = require("../src/debounce");
describe('debounce', function () {
    it('retarda la llamada de la función pasada como argumento', function () {
        var func = jest.fn();
        var debouncedFunc = (0, debounce_1.debounce)(func, 1000);
        debouncedFunc();
        expect(func).not.toHaveBeenCalled(); // La función no se ha llamado inmediatamente
        jest.runAllTimers(); // Avanza todos los temporizadores
        expect(func).toHaveBeenCalledTimes(1); // Ahora la función debe haber sido llamada
    });
    it('no ejecuta la función objetivo más de una vez dentro del período especificado', function () {
        var func = jest.fn();
        var debouncedFunc = (0, debounce_1.debounce)(func, 1000);
        debouncedFunc();
        debouncedFunc();
        debouncedFunc();
        jest.runAllTimers(); // Avanza todos los temporizadores
        expect(func).toHaveBeenCalledTimes(1); // La función objetivo debe haberse llamado solo una vez
    });
});
it('pasa los argumentos correctos a la función objetivo', function (done) {
    var func = jest.fn();
    var debouncedFunc = (0, debounce_1.debounce)(func, 100);
    debouncedFunc('argumento1', 'argumento2');
    setTimeout(function () {
        expect(func).toHaveBeenCalledWith('argumento1', 'argumento2');
        done();
    }, 1000); // Espera más tiempo que el debounce para asegurar que se ejecuta
});
