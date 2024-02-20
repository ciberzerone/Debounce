var _a;
export function debounce(func, tiempo) {
    let timeoutId;
    return function (...args) {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(() => {
            func(...args);
        }, tiempo);
    };
}
export function alertar(nombre, apellido) {
    alert(`Hola ${nombre} ${apellido}`);
}
export const alertarDebounced = debounce(alertar, 1000);
if (typeof document !== 'undefined') {
    (_a = document.getElementById('miBoton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        alertarDebounced('gianmarco', 'belmar');
    });
}
//# sourceMappingURL=debounce.js.map