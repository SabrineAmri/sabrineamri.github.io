console.log("script.js loaded");

// Disable right-click on all images
document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });
  
  // Language switcher functionality
  document.getElementById('language-select').addEventListener('change', function () {
    const selectedLanguage = this.value;
  
    // Hide both language sections
    document.getElementById('content-en').style.display = 'none';
    document.getElementById('content-fr').style.display = 'none';
  
    // Show the selected one
    if (selectedLanguage === 'fr') {
      document.getElementById('content-fr').style.display = 'block';
  
      document.getElementById('nav-profile').textContent = 'Profil';
      document.getElementById('nav-research').textContent = 'Recherche';
      document.getElementById('nav-publications').textContent = 'Publications';
      document.getElementById('nav-teaching').textContent = 'Enseignement';
      document.getElementById('nav-co-supervision').textContent = 'Étudiants co-encadrés';
  
    } else {
      document.getElementById('content-en').style.display = 'block';
  
      document.getElementById('nav-profile').textContent = 'Profile';
      document.getElementById('nav-research').textContent = 'Research';
      document.getElementById('nav-publications').textContent = 'Publications';
      document.getElementById('nav-teaching').textContent = 'Teaching';
      document.getElementById('nav-co-supervision').textContent = 'Co-supervised Students';
    }
  
    // Save language
    localStorage.setItem('preferredLanguage', selectedLanguage);
    initializeCollapsibles(); // re-initialize
  });
  
  // Set language on load
  function switchLanguage(language) {
    if (language === 'fr') {
      document.getElementById('content-en').style.display = 'none';
      document.getElementById('content-fr').style.display = 'block';
      document.getElementById('nav-profile').textContent = 'Profil';
      document.getElementById('nav-research').textContent = 'Recherche';
      document.getElementById('nav-publications').textContent = 'Publications';
      document.getElementById('nav-teaching').textContent = 'Enseignement';
      document.getElementById('nav-co-supervision').textContent = 'Étudiants co-encadrés';
    } else {
      document.getElementById('content-en').style.display = 'block';
      document.getElementById('content-fr').style.display = 'none';
      document.getElementById('nav-profile').textContent = 'Profile';
      document.getElementById('nav-research').textContent = 'Research';
      document.getElementById('nav-publications').textContent = 'Publications';
      document.getElementById('nav-teaching').textContent = 'Teaching';
      document.getElementById('nav-co-supervision').textContent = 'Co-supervised Students';
    }
  }
  
  // Initial language load
  function loadPreferredLanguage() {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    document.getElementById('language-select').value = lang;    
    switchLanguage(lang);
    //initializeCollapsibles(); // initialize after correct section is shown
  }
  
  // 🔄 Correct handling for collapsibles (open/close properly)
  
  function initializeCollapsibles() {
    document.querySelectorAll('.collapsible').forEach(btn => {
      const content = btn.nextElementSibling;
  
      // Reset state
      content.style.maxHeight = null;
      content.style.padding = "0 20px";
      btn.classList.remove('active');
  
      // Éviter les doublons
      btn.onclick = () => {
        const isOpen = btn.classList.contains('active');
  
        if (isOpen) {
          // Fermer celui cliqué
          btn.classList.remove('active');
          content.style.maxHeight = null;
          content.style.padding = "0 20px";
        } else {
          // Ouvrir celui cliqué
          btn.classList.add('active');
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "15px 20px";
        }
      };
    });
  }
  

  //window.onload = loadPreferredLanguage;
  window.onload = function () {
    loadPreferredLanguage();
    initializeCollapsibles(); // <== ici !
  };
  