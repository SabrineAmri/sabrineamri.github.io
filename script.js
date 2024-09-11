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
        
        // Optionally change URLs to French if needed
        // e.g., update URLs if you have different language versions of the pages
    } else {
        document.getElementById('content-en').style.display = 'block';
        
        // Update navigation links to English
        document.getElementById('nav-profile').textContent = 'Profile';
        document.getElementById('nav-research').textContent = 'Research';
        document.getElementById('nav-publications').textContent = 'Publications';
        document.getElementById('nav-teaching').textContent = 'Teaching';
    }
});

