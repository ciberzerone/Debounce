//creaccion del  debounce.ts
// creacion del debounce debounce<F
export function debounce<F extends (...args: any[]) => void>(func: F, tiempo: number): (...args: Parameters<F>) => void {
  let timeoutId: number | undefined;

  return function(...args: Parameters<F>) {
    // Cancela la ejecución previa si se vuelve a llamar dentro del tiempo de espera
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
  // Establece un nuevo temporizador
    timeoutId = window.setTimeout(() => {
      func(...args);
    }, tiempo);
  };
}

// Función para mostrar una alerta
export function alertar(nombre: string, apellido: string): void {
  alert(`Hola ${nombre} ${apellido}`);
}

// Crear una versión debounced de alertar
export const alertarDebounced = debounce(alertar, 1000);

// Vincula la versión debounced al evento de clic de un botón
if (typeof document !== 'undefined') {
  document.getElementById('miBoton')?.addEventListener('click', () => {
      alertarDebounced('gianmarco', 'belmar');
  });
}
