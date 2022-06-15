// objects
const showcaseObject = {
 title: "About",
 src: "../images/about-mission.jpg",
}

const missionObject =
{
 title: "Our Mission",
 location: "Established 2020, Sed Libero, CA",
 statement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis vel deserunt? Consequuntur quisquam reiciendis doloremque vero nihil inventore vel necessitatibus, omnis possimus asperiores harum placeat quis. Cum, sequi quas.",
}

const members = [
 {
  education: "M.D.",
  email: "leo vel orci porta non@gmail.com",
  name: "Tellus Orci",
  src: "../images/about-member-01.jpg",
  summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis perferendis architecto repudiandae! Necessitatibus ad maxime asperiores accusantium minus unde dicta ut reiciendis, voluptate quidem.",
 },
 {
  education: "M.D.",
  email: "mus mauris vitae ultricies leo@gmail.com",
  name: "Maecenas Volutpat",
  src: "../images/about-member-02.jpg",
  summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim non error ab, tempora esse doloribus quam ullam itaque ipsum earum sapiente fugiat iusto nostrum numquam qui.",
 },
]

// variables
const showcase = document.querySelector(".showcase");
const mission = document.querySelector(".mission");
const team = document.querySelector(".team");

// functions
function loadHtml()
{
 loadShowcase();
 loadMission();
 loadTeam();
}

function loadShowcase()
{
 showcase.innerHTML = `<h1 class="showcase__title">${showcaseObject.title}</h1>
 <div class="showcase__nav">
   <a class="showcase__link" href="#mission-content">
   <svg class="showcase__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
       <g stroke-linecap="round" class="nc-icon-wrapper" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></g>
   </svg>
   </a>
 </div>`;
 showcase.style.backgroundImage = `linear-gradient(rgba(8, 15, 15, .6), rgba(8, 15, 15, .6)), url("${showcaseObject.src}")`;
}

function loadMission()
{
 mission.innerHTML = `<h2 class="mission__title">${missionObject.title}</h2>
 <p class="mission__subtitle">${missionObject.location}</p>
 <p class="mission__body">${missionObject.statement}</p>`
}

function loadTeam()
{
 membersList = members.map(function(member)
 {
  return `<div class="member">
   <img src="${member.src}" class="member__img" />
   <h3 class="member__title">${member.name}, ${member.education}</h3>
   <p class="member__body">${member.summary}</p>
   <p class="member__contact">${member.email}</p>
  </div>
`
 })
 team.insertAdjacentHTML(`beforeend`, membersList.join(""));
 team.insertAdjacentHTML(`afterbegin`, `<div class="team__divider"></div>`);
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 loadHtml();
})
