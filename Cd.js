// JavaScript for handling interactions and displaying/hiding sections

// Function to show the "Sobre Nós" section
function showSobreMim() {
    // Hide other sections if they are visible
    hideAllSections();
    // Show the desired section
    document.getElementById('card-sobre-mim').style.display = 'block';
}

// Function to show the "Contatos" section
function showCertificados() {
    // Hide other sections if they are visible
    hideAllSections();
    // Show the desired section
    document.getElementById('card-certificados').style.display = 'block';
}

// Function to hide all sections
function hideAllSections() {
    // Get all card sections
    var sections = document.getElementsByClassName('card-section');
    // Loop through and hide each section
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
}

// Function to exit (hide) the currently displayed card section
function exitCards() {
    // Hide all sections
    hideAllSections();
}

// Optional: You can also add a function to initialize your page state
function initializePage() {
    // Example: hide all sections on page load
    hideAllSections();
}

// Initialize the page when it first loads
initializePage();
