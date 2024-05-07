function searchBar() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

var els = document.getElementsByTagName("a");
for(var i = 0, l = els.length; i < l; i++) {
  var el = els[i];
  el.innerHTML = el.innerHTML.replace(/link1/gi, 'dead link');
}
var els = document.getElementsByTagName("a[href='http://domain.example']");



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