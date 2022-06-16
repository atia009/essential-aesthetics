// objects
const showcaseObject =
{
 src: "../images/services-showcase.jpg",
 title: "Services",
};

const servicesList =
[
 {
  title: "Laser Hair Removal",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Botox",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Acne Scar Removal",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Facial Volume Loss",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Hand Rejuvenation",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
]

// functions
function loadHtml()
{
 loadShowcase();
 loadServices();
}

function loadShowcase()
{
  const showcase = document.querySelector(".showcase");
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

function loadServices()
{
 let serviceItems = servicesList.map(function(service)
 {
  return `<li class="service">
           <h3 class="service__title">${service.title}</h3>
           <p class="service__body">${service.body}</p>
           <button class="service__btn bg--hover">
             <a href="${service.btnLink}" class="service__link">${service.btnText}</a>
           </button>
      </li>`
 })
 const services = document.querySelector(".services");
 services.insertAdjacentHTML(`beforeend`, serviceItems.join(""));
}

// event listeners
window.addEventListener("DOMContentLoaded", loadHtml);