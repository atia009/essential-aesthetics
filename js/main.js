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
        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
          <g fill="#75b0af" class="nc-icon-wrapper">
            <path d="M33.14 6.43c1.24 3.04 1.23 3.42 1.45 6.84 0.58-0.26 1.2-0.66 1.82-1.27 0 0-0.64 1.11-1.79 1.64 0.51 5.64 5.16 3.8 1.21 6.06-0.29 1.69 1.13 2.46-0.57 2.58 1.85 1.52-0.13 1.42-0.22 1.97-0.11 0.64 0.75 1.24 0.4 2.63-0.34 1.39-5.62 0.17-7.53 0.42-3.65 0.49-5.64 3.63-5.57 7.28 0.04 1.78-8.27-6.98 5.5-16.3 5.29-3.42 5.27-11.88 5.3-11.85z m-24.19 14.82c4.34-4.19 0.65-23.68 11.38-22.01l3.85 0.6c-2.19-0.92-4.92-1.61-6.1-1.64-12.26-0.24-5.59 17.11-9.13 23.05z m21.6-13.97c-0.77 13.74-21.36 12.55-9.82 26.62-16.54-12.34 8-15.09 9.82-26.62z" fill-rule="evenodd"></path>
          </g>
        </svg>
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
 document.querySelector(".footer").innerHTML = `<ul class="foot-pages">
    <li class="foot-page"><a href="index.html" class="foot-page__link --page-link --link-animation">Home</a></li> 
    <li class="foot-page"><a href="about.html" class="foot-page__link --page-link --link-animation">About</a></li> 
    <li class="foot-page"><a href="services.html" class="foot-page__link --page-link --link-animation">Services</a></li> 
    <li class="foot-page"><a href="products.html" class="foot-page__link --page-link --link-animation">Products</a></li> 
    <li class="foot-page"><a href="specials.html" class="foot-page__link --page-link --link-animation">Specials</a></li> 
    <li class="foot-page"><a href="patient.html" class="foot-page__link --page-link --link-animation">Patient Resources</a></li> 
  </ul>
  <ul class="foot-socials">
    <li class="foot-social">
      <a href="https://www.facebook.com/" target="_blank" class="foot-social__link">
        <svg class="foot-social__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Facebook</title>
          <g stroke-linecap="round" class="nc-icon-wrapper" fill="none" stroke="#233e3d" stroke-width="2" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7"></path>
          </g>
        </svg>
      </a>
    </li>
    <li class="foot-social">
      <a href="mailto: essentialaesthetics@gmail.com" target="_blank" class="foot-social__link">
        <svg class="foot-social__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Email</title>
          <g stroke-linecap="round" class="nc-icon-wrapper" fill="none" stroke="#233e3d" stroke-width="2" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>
          </g>
        </svg>
      </a>
    </li>
    <li class="foot-social">
      <a href="https://www.google.com/maps" target=_blank" class="foot-social__link">
        <svg class="foot-social__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Google Maps</title>
          <g stroke-linecap="round" class="nc-icon-wrapper" fill="none" stroke="#233e3d" stroke-width="2" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="11" r="3"></circle><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path>
          </g><
        /svg>
      </a>
    </li>
  </ul>
  <ul class="info">
    <li class="info__item">Essential Aesthetics</li>
    <li class="info__item">9972 Garden Grove Blvd</li>
    <li class="info__item">Garden Grove, CA</li>
    <li class="info__item">92843</li>
    <li class="info__item">Mon to Fri: 9am - 5pm</li> 
    <li class="info__item">Sat: 10am - 3pm</li> 
    <li class="info__item">213.569.1293</li>
    <li class="info__item">essentialaesthetics@gmail.com</li>
    <li class="info__item">&copy;2022 Essential Care Medical</li>
  </ul>`
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