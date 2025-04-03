function filterOptions() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const grid = document.getElementById('optionsGrid');
    const cards = grid.getElementsByClassName('option-card');

    for (let card of cards) {
        const searchText = card.getAttribute('data-search').toLowerCase();
        const cardText = card.textContent.toLowerCase();
        const searchMatch = searchText.includes(filter) || cardText.includes(filter);
        
        if (searchMatch) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}

// Adiciona um console.log para debug
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script de pesquisa carregado');
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        console.log('Input de pesquisa encontrado');
    } else {
        console.log('Input de pesquisa NÃO encontrado');
    }
});
