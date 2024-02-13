// creaccion del main.ts
// importar desde debounce, como esta en la misma carpeta solo utiliza ./
import { debounce } from './debounce';

// función de búsqueda
function search(query: string): void {
    console.log(`Buscando: ${query}`);
}

// Debilitar de la función de búsqueda para que ejecute por 500 ms
const debouncedSearch = debounce(search, 500);

// Configurar el escuchador de eventos en el campo de entrada de texto
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('miBoton') as HTMLInputElement;

    searchInput.addEventListener('input', (event) => {
        // Llamamos a la versión debilitada de nuestra función de búsqueda, pasando el valor actual del campo de texto
        const query = (event.target as HTMLInputElement).value;
        debouncedSearch(query);
    });
});
