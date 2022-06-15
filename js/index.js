// objects
const cards = [
 {
  title: "Services",
  body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, repellendus aperiam quas totam alias velit voluptate est sed ratione architecto.",
  btnText: "View All",
  btnLink: "services.html",
 },
 {
  title: "Products",
  body: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae similique, repellat veritatis corrupti a cupiditate mollitia deleniti ad culpa minus?",
  btnText: "View All",
  btnLink: "products.html",
 },
 {
  title: "Specials",
  body: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit animi voluptates assumenda repellat odit! Et obcaecati consequuntur veritatis reprehenderit.",
  btnText: "Learn More",
  btnLink: "specials.html",
 },
]

const showcaseObject =
{
 title: "Welcome In",
 src: "../images/home-showcase.png",
};

// variables
const main = document.querySelector(".main");
const showcase = document.querySelector(".showcase");

// functions
function loadHtml()
{
 loadShowcase();
 loadCards();
}

function loadShowcase()
{
 showcase.innerHTML = `<h1 class="showcase__title">${showcaseObject.title}</h1>
 <div class="showcase__nav">
     <a class="showcase__link" href="#main-content">
        <svg class="showcase__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g stroke-linecap="round" class="nc-icon-wrapper" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></g>
        </svg>
     </a>
 </div>`
 showcase.style.backgroundImage = `linear-gradient(rgba(8, 15, 15, .6), rgba(8, 15, 15, .6)), url("${showcaseObject.src}")`;
}

function loadCards()
{
 cardsList = cards.map(function(card)
 {
  return `<div class="card --border-top">
  <h3 class="card__title">${card.title}</h3>
  <p class="card__body">${card.body}</p>
  <button class="card-btn bg--hover">
   <a href="${card.btnLink}" class="card-btn__link">${card.btnText}</a>
  </button>
 </div>`
 })
 main.insertAdjacentHTML(`beforeend`, cardsList.join(""));
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 loadHtml();
})
