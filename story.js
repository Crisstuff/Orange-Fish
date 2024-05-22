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



// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
