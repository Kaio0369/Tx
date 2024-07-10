// Function to show the "Sobre Nós" section
function showSobreMim() {
    hideAllSections(); // Esconde todas as outras seções
    document.getElementById('card-sobre-mim').style.display = 'block'; // Mostra a seção desejada
}

// Function to show the "Certificados" section
function showCertificados() {
    hideAllSections(); // Esconde todas as outras seções
    document.getElementById('card-certificados').style.display = 'block'; // Mostra a seção desejada
}

// Function to hide all sections
function hideAllSections() {
    var sections = document.getElementsByClassName('card-section'); // Obtém todas as seções
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none'; // Esconde cada seção
    }
}

// Function to exit (hide) the currently displayed card section
function exitCards() {
    hideAllSections(); // Esconde todas as seções
}

// Optional: Initialize your page state
function initializePage() {
    hideAllSections(); // Esconde todas as seções ao carregar a página
}

// Initialize the page when it first loads
initializePage();
