// functions
function startWebsiteFunctionality() {
  loadHeader();
  loadFooter();
  startLinkFunctionality();
  startNavFunctionality();
}

function loadHeader()
{
 document.querySelector(".header").innerHTML = `
  <nav class="nav">
    <div class="sub-nav wrap-horizontal">
      <p class="sub-nav__message"><strong class="sub-nav__strong">Now Taking Appointments!</strong> Please call us during business hours. <a href="#contact" class="sub-nav__link">Contact Info</a></p>
    </div>
    <div class="main-nav wrap-horizontal">
      <a href="index.html" class="logo --page-link">
        <img class="logo__img" src="../images/logo.svg"></img>
        <h1 class="logo__title">Essential Aesthetics</h1>
      </a>
      <button class="nav-toggle">
        <span class="nav-toggle__top"></span>
        <span class="nav-toggle__middle"></span>
        <span class="nav-toggle__bottom"></span>
      </button>
      <div class="nav-content">
        <ul class="pages">
          <li class="page"><a href="index.html" class="page__link --page-link --link-animation">Home</a></li>
          <li class="page"><a href="about.html" class="page__link --page-link --link-animation">About</a></li>
          <li class="page"><a href="services.html" class="page__link --page-link --link-animation">Services</a></li>
          <li class="page"><a href="products.html" class="page__link --page-link --link-animation">Products</a></li>
          <li class="page"><a href="specials.html" class="page__link --page-link --link-animation">Specials</a></li>
          <li class="page"><a href="patient.html" class="page__link --page-link --link-animation">Patient Resources</a></li>
        </ul>
      </div>
    </div>
  </nav>`
}

function loadFooter()
{
 document.querySelector(".footer").innerHTML = `<div class="foot-tab">
   <h4 class="foot-tab__title">Visit Us</h4>
   <ul class="foot-tab__list">
    <li class="foot-tab__item">9972 Garden Grove Blvd</li>
    <li class="foot-tab__item">Garden Grove, CA, 92843</li>
    <li class="foot-tab__item">Mon to Fri: 9am - 5pm</li> 
    <li class="foot-tab__item">Sat: 10am - 3pm</li> 
   </ul>
  </div>
  <div class="foot-tab" id="contact">
   <h4 class="foot-tab__title">Contact</h4>
   <ul class="foot-tab__list">
    <li class="foot-tab__item">213-569-1293</li>
    <li class="foot-tab__item">essentialaesthetics@gmail.com</li>
   </ul>
  </div>
  <div class="foot-tab">
   <h4 class="foot-tab__title">Quick Links</h4>
   <ul class="foot-tab__list">
    <li class="foot-tab__item"><a href="index.html" class="foot-tab__link --page-link --link-animation">Home</a></li> 
    <li class="foot-tab__item"><a href="about.html" class="foot-tab__link --page-link --link-animation">About</a></li> 
    <li class="foot-tab__item"><a href="services.html" class="foot-tab__link --page-link --link-animation">Services</a></li> 
    <li class="foot-tab__item"><a href="products.html" class="foot-tab__link --page-link --link-animation">Products</a></li> 
    <li class="foot-tab__item"><a href="specials.html" class="foot-tab__link --page-link --link-animation">Specials</a></li> 
    <li class="foot-tab__item"><a href="patient.html" class="foot-tab__link --page-link --link-animation">Patient Resources</a></li> 
   </ul>
  </div>
  <div class="foot-bottom">
    <ul class="social">
      <a href="https://www.facebook.com/" target="_blank" class="social__link"></a>
      <a href="https://www.yelp.com/" target="_blank" class="social__link"></a>
      <a href="https://www.instagram.com/" target=_blank" class="social__link"></a>
    </ul>
    <div class="copyright">
      <p class="copyright__company">Essential Aesthetics</p>
      <p class="copyright__info">&copy; 2021 Essential Care Medical</p>
    </div>
  </div>`
}

function startNavFunctionality() {
  const navToggle = document.querySelector(`.nav-toggle`);

  navToggle.addEventListener(`click`, updateMobileNavVisibility);
}

function updateMobileNavVisibility() {
  const navContent = document.querySelector(`.nav-content`);

  updateToggleClass(navContent, `--is-active`);
  updateToggleClass(this, `--is-active`);
}

function updateToggleClass(element, className) {
  if (element.classList.contains(className)) {
      element.classList.remove(className);
  } else {
      element.classList.add(className);
  }
}


function startLinkFunctionality() {
 const pages = Array.from(document.querySelectorAll(".--page-link"));
 const currentLink = document.URL;
 updateLinks(pages, currentLink);
}

function updateLinks(links, currentLink) {
  if (currentLink.includes(`index.html`) || !currentLink.endsWith(`html`)) {
    links.forEach((link) => {
      updatePath(link, link.getAttribute(`href`), ``, `pages/`);
    });
  } else {
    links.forEach((link) => {
      updatePath(link, link.getAttribute(`href`), `../`, ``);
    });
  }
}

function updatePath(link, currentPath, homeDir, pagesDir) {
  if (currentPath.includes(`index`)) {
    link.setAttribute(`href`, homeDir.concat(``, currentPath));
  } else {
    link.setAttribute(`href`, pagesDir.concat(``, currentPath));
  }
}

window.addEventListener("DOMContentLoaded", startWebsiteFunctionality);