// objects
const specialsList = [
 {
  details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi debitis beatae mollitia hic minima magnam iste maiores error ducimus dicta!",
  discount: "20%",
  title: "Botox",
 },
 {
  details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed dolores eius quos odit reprehenderit consequatur itaque voluptatibus laudantium est?",
  discount: "30%",
  title: "Zo Products",
 },
 {
  details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores iure cumque distinctio accusamus ipsa fuga sapiente ad, alias dolor.",
  discount: "10%",
  title: "Laser Hair Removal",
 },
]

// functions
function loadHtml()
{ 
 loadBanner();
 loadSpecials();
}

function loadBanner()
{
 const banner = document.querySelector(".banner");
 banner.innerHTML = `<h1 class="banner__title">Specials</h1>`;
}

function loadSpecials()
{
 const specials = document.querySelector(".specials");
 let specialsItems = specialsList.map(function(special)
 {
  return `<li class="special">
        <h3 class="special__title">${special.title}</h3>
        <p class="special__subtitle">${special.discount}</p>
        <p class="special__body">${special.details}</p>
        <div class="special__column"></div>
      </li>`
 })
 specials.insertAdjacentHTML(`beforeend`, specialsItems.join(""));
}

// event listener
window.addEventListener("DOMContentLoaded", loadHtml);