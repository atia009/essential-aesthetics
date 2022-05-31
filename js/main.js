// functions
function loadHeader()
{
 document.querySelector(".header").innerHTML = `
  <a href="index.html" class="logo --page-link">
    <img class="logo__img" src="../images/logo.svg"></img>
    <h1 class="logo__title">Essential Aesthetics</h1>
  </a>
  <nav class="nav">
    <div class="main-nav">
      <span class="nav-enter">
          <i class="nav-enter__bar"></i>
      </span>
      <ul class="pages">
        <li class="page"><a href="index.html" class="page__link --page-link --link-animation">Home</a></li>
        <li class="page"><a href="about.html" class="page__link --page-link --link-animation">About</a></li>
        <li class="page"><a href="services.html" class="page__link --page-link --link-animation">Services</a></li>
        <li class="page"><a href="products.html" class="page__link --page-link --link-animation">Products</a></li>
        <li class="page"><a href="specials.html" class="page__link --page-link --link-animation">Specials</a></li>
        <li class="page"><a href="patient.html" class="page__link --page-link --link-animation">Patient Resources</a></li>
      </ul>
    </div>
    <div class="mobile-nav --hidden">
      <span class="nav-exit">
      </span>
      <ul class="mobile-pages">
          <li class="mobile-page"><a href="index.html" class="mobile-page__link --page-link">Home</a></li>     
          <li class="mobile-page"><a href="about.html" class="mobile-page__link --page-link">About</a></li>     
          <li class="mobile-page"><a href="services.html" class="mobile-page__link --page-link">Services</a></li>     
          <li class="mobile-page"><a href="products.html" class="mobile-page__link --page-link">Products</a></li>     
          <li class="mobile-page"><a href="specials.html" class="mobile-page__link --page-link">Specials</a></li>     
          <li class="mobile-page"><a href="patient.html" class="mobile-page__link --page-link">Patient Resources</a></li>     
      </ul>
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


function toggleNav() 
{
 const navBtn = document.querySelector(".nav__btn");
 const nav = document.querySelector(".nav");
 const logo = document.querySelector(".logo");
 const pageList = document.querySelector(".pages");
 navBtn.addEventListener("click", function() 
 {
  if (nav.classList.contains("toggleNav")) 
  {
   navBtn.innerHTML = `<i class="fas fa-bars nav__enter"></i>`;
   hideNav(nav, logo, pageList);
  }
  else 
  {
   navBtn.innerHTML = `<i class="fas fa-times nav__exit" style="color: var(--lt)"></i>`;
   showNav(nav, logo, pageList);
  }
 })
}

function hideNav(nav, logo, pageList) 
{
 nav.classList.remove("toggleNav");
 nav.classList.remove("nav-invert");
 pageList.classList.add("hidden");
 logo.classList.remove("hidden");
}

function showNav(nav, logo, pageList)
{
  nav.classList.add("toggleNav");
  nav.classList.add("nav-invert");
  pageList.classList.remove("hidden");
  logo.classList.add("hidden");
}

function addBtnFunctionality()
{;
  const buttonOuterList = [...document.querySelectorAll(`.bg--hover`)].map(function(button) 
  {
    return button;
  })
  const buttonInnerList = buttonOuterList.map(function(button)
  {
    return button.firstElementChild;
  })

  for (let index = 0; index < buttonOuterList.length; index++)
  {
      addHoverFunctionality(buttonOuterList[index], buttonInnerList[index]);
  }
}

function addHoverFunctionality(parentElement, childElement)
{
 parentElement.addEventListener("mouseenter", () => swapColors(parentElement, childElement));
 parentElement.addEventListener("mouseleave", () => swapColors(parentElement, childElement));
}

function swapColors(parentElement, childElement)
{
 const parentColor = window.getComputedStyle(parentElement).backgroundColor;
 const childColor = window.getComputedStyle(childElement).color;
 parentElement.style.backgroundColor = childColor;
 childElement.style.color = parentColor;      
}


// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 loadHeader();
 loadFooter();
 startLinkFunctionality();
 toggleNav();
 addBtnFunctionality();
})