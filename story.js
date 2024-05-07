let previousSection = null;

function scrollToSection(sectionId) {
    window.onload = addStorySection("content", "my-favoritt");
    let section = document.getElementById(sectionId);
    if (section) {
        // Skjul den forrige seksjonen hvis den eksisterer
        if (previousSection) {
            previousSection.style.display = 'none';
        }
        // Vis mål-avsnittet
        section.style.display = 'flex';
        // Rull til mål-avsnittet
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Oppdater den forrige seksjonen
        previousSection = section;
    }else{
        window.onload = addStorySection("content", "my-favoritt");
    }
}

