import { debounce } from './debounce.js';
function search(query) {
    console.log(`Buscando: ${query}`);
}
const debouncedSearch = debounce(search, 500);
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('miBoton');
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        debouncedSearch(query);
    });
});
//# sourceMappingURL=main.js.map