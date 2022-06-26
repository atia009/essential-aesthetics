// objects
const showcaseObject = {
 title: "About",
 src: "../images/about-mission.jpg",
}

const missionObject =
{
 title: "Our Mission",
 statement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis vel deserunt? Consequuntur quisquam reiciendis doloremque vero nihil inventore vel necessitatibus, omnis possimus asperiores harum placeat quis. Cum, sequi quas.",
}

const members = [
 {
  education: "MD",
  email: "portanon@gmail.com",
  name: "Tellus Orci",
  src: "../images/about-member-01.jpg",
  summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis perferendis architecto repudiandae! Necessitatibus ad maxime asperiores accusantium minus unde dicta ut reiciendis, voluptate quidem.",
  title: "Our Founder",
 },
 {
  education: "MD",
  email: "ultriciesleo@gmail.com",
  name: "Maecenas Volutpat",
  src: "../images/about-member-02.jpg",
  summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim non error ab, tempora esse doloribus quam ullam itaque ipsum earum sapiente fugiat iusto nostrum numquam qui.",
  title: "Our Doctor",
 },
]

// functions
function loadHtml()
{
 loadBanner();
 loadMission();
 loadTeam();
}

function loadBanner()
{
  const banner = document.querySelector(".banner");
  banner.innerHTML = `<h1 class="banner__title">About Us</h1>`;
}

// function loadShowcase()
// {
//  const showcase = document.querySelector(".showcase");
//  showcase.innerHTML = `<h1 class="showcase__title">${showcaseObject.title}</h1>
//  <div class="showcase__nav">
//    <a class="showcase__link" href="#main-content">
//    <svg class="showcase__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//        <g stroke-linecap="round" class="nc-icon-wrapper" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></g>
//    </svg>
//    </a>
//  </div>`;
//  showcase.style.backgroundImage = `linear-gradient(rgba(8, 15, 15, .6), rgba(8, 15, 15, .6)), url("${showcaseObject.src}")`;
// }

function loadMission()
{
 const mission = document.querySelector(".mission");
 mission.innerHTML = `<h2 class="mission__title">${missionObject.title}</h2>
 <p class="mission__body">${missionObject.statement}</p>
 <img src="${showcaseObject.src}" class="mission__img"></img>`
}

function loadTeam()
{
 membersList = members.map(function(member)
 {
  return `<div class="member">
  <h3 class="member__title">${member.title}</h3>
  <p class="member__subtitle"><strong class="member__info">${member.name}, ${member.education}</strong> - ${member.email}</p>
  <p class="member__body">${member.summary}</p>
  <img src="${member.src}" class="member__img" />
  </div>
 `
 })

 const team = document.querySelector(".team");
 team.insertAdjacentHTML(`beforeend`, membersList.join(""));
}

// event listeners
window.addEventListener("DOMContentLoaded", loadHtml);
