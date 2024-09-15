// Disable right-click on all images
document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Language switcher functionality
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;

    // Hide both language sections for page content
    document.getElementById('content-en').style.display = 'none';
    document.getElementById('content-fr').style.display = 'none';

    // Switch page content based on selected language
    if (selectedLanguage === 'fr') {
        document.getElementById('content-fr').style.display = 'block';

        // Update navigation links to French
        document.getElementById('nav-profile').textContent = 'Profil';
        document.getElementById('nav-research').textContent = 'Recherche';
        document.getElementById('nav-publications').textContent = 'Publications';
        document.getElementById('nav-teaching').textContent = 'Enseignement';
        document.getElementById('nav-co-supervision').textContent = 'Étudiants co-encadrés'; // Translation added

        // Optionally change URLs to French if needed
        // e.g., update URLs if you have different language versions of the pages
    } else {
        document.getElementById('content-en').style.display = 'block';

        // Update navigation links to English
        document.getElementById('nav-profile').textContent = 'Profile';
        document.getElementById('nav-research').textContent = 'Research';
        document.getElementById('nav-publications').textContent = 'Publications';
        document.getElementById('nav-teaching').textContent = 'Teaching';
        document.getElementById('nav-co-supervision').textContent = 'Co-supervised Students'; // English version
    }

    // Save the selected language to localStorage
    localStorage.setItem('preferredLanguage', selectedLanguage);
});

// Function to switch content based on selected language
function switchLanguage(language) {
    if (language === 'fr') {
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-fr').style.display = 'block';
        
        // Update navigation links to French
        document.getElementById('nav-profile').textContent = 'Profil';
        document.getElementById('nav-research').textContent = 'Recherche';
        document.getElementById('nav-publications').textContent = 'Publications';
        document.getElementById('nav-teaching').textContent = 'Enseignement';
        document.getElementById('nav-co-supervision').textContent = 'Étudiants co-encadrés'; // Translation added
        
    } else {
        document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-fr').style.display = 'none';

        // Update navigation links to English
        document.getElementById('nav-profile').textContent = 'Profile';
        document.getElementById('nav-research').textContent = 'Research';
        document.getElementById('nav-publications').textContent = 'Publications';
        document.getElementById('nav-teaching').textContent = 'Teaching';
        document.getElementById('nav-co-supervision').textContent = 'Co-supervised Students'; // English version
    }
}

// Function to load the preferred language from localStorage
function loadPreferredLanguage() {
    // Check if a language is stored in localStorage
    const storedLanguage = localStorage.getItem('preferredLanguage');
    
    // If there's a stored language, apply it; otherwise, default to English
    const preferredLanguage = storedLanguage ? storedLanguage : 'en';
    
    // Set the language in the dropdown
    document.getElementById('language-select').value = preferredLanguage;
    
    // Switch to the preferred language
    switchLanguage(preferredLanguage);
}

// Load the preferred language when the page loads
window.onload = loadPreferredLanguage;
