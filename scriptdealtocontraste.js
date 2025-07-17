// Função para alternar o alto contraste
function toggleContrast() {
    const body = document.body;
    const mainMenu = document.querySelector('.main-menu');
    const topBar = document.querySelector('.top-bar');
    const cards = document.querySelectorAll('.option-card');
    const pageTitle = document.querySelector('.page-title');
    
    // Toggle da classe high-contrast
    body.classList.toggle('high-contrast');
    mainMenu.classList.toggle('high-contrast');
    topBar.classList.toggle('high-contrast');
    pageTitle.classList.toggle('high-contrast');
    cards.forEach(card => card.classList.toggle('high-contrast'));
    
    // Salva o estado no localStorage
    const isHighContrast = body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
}

// Verifica o estado salvo ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const isHighContrast = localStorage.getItem('highContrast') === 'true';
    
    if (isHighContrast) {
        const body = document.body;
        const mainMenu = document.querySelector('.main-menu');
        const topBar = document.querySelector('.top-bar');
        const cards = document.querySelectorAll('.option-card');
        const pageTitle = document.querySelector('.page-title');
        
        body.classList.add('high-contrast');
        mainMenu.classList.add('high-contrast');
        topBar.classList.add('high-contrast');
        pageTitle.classList.add('high-contrast');
        cards.forEach(card => card.classList.add('high-contrast'));
    }
}); 