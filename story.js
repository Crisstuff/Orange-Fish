




document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("myImage");
  const overlay = document.getElementById("overlay");
  image.addEventListener("click", () => {
      overlay.classList.add("visible");
  });

  overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
  });
});

// dette er functionene som viser info pop-Up siden i starten av spillet
// Venter til vinduet er lastet ned 

// Viser  pop-up
function showPopup() {
  var popUp = document.getElementById('popUp');
  popUp.showModal();
}
// function som lukker popup 
function closePopup() {
    var popUp = document.getElementById('popUp');
    popUp.close();
}

let previousSections = [];

function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
  //previousSections.style.display = 'none'; ------ meg som prøver å få den forje seksjonen til og forsvine når den neste popper opp
  if (section) {
      // Lagre ID-en til den forrige seksjonen
      previousSections.push(sectionId);
      // Vis mål-avsnittet
      section.style.display = 'flex';
      // Rull til mål-avsnittet
      section.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
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