// objects
const pdfsObject = [
 {
  link: "#",
  title: "Medical Records",
 },
 {
  link: "#",
  title: "Questionnaire",
 },
 {
  link: "#",
  title: "Forms",
 },
 {
  link: "#",
  title: "Acknowledgment of Rights",
 },
 {
  link: "#",
  title: "Aftercare",
 },
]

const faqsObject = [
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  id: 0,
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  id: 1,
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  id: 2,
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  id: 3,
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  id: 4,
  question: "Lorem ipsum dolor sit?",
 },
]

// functions
function loadHtml()
{
 loadBanner();
 loadPdfs();
 loadFaqs();
}

function loadBanner()
{
 const banner = document.querySelector(".banner");
 banner.innerHTML = `<h1 class="banner__title">Patient Resources</h1>`;
}

function loadPdfs()
{
 const pdfs = document.querySelector(".pdfs");
 let pdfsList = pdfsObject.map(function(pdf)
 {
  return `<li class="pdf bg--hover">
          <a href="${pdf.link}" target="_blank" class="pdf__link">${pdf.title}</a>
        </li>`
 })
 pdfs.insertAdjacentHTML(`beforeend`, pdfsList.join(""));
}

function loadFaqs()
{
 const faqs = document.querySelector(".faqs");
 let faqsList = faqsObject.map(function(faq)
 {
  return `<li class="faq">
        <h4 class="faq__question">${faq.question}</h4>
        <p class="faq__inner faq__inner--${faq.id}">${faq.answer}</p>
        </li>`
 })
 faqs.insertAdjacentHTML(`beforeend`, faqsList.join(""));
 faqs.insertAdjacentHTML(`beforebegin`, `<h3 class="faq-title">Frequently Asked Questions</h3>`);
 updateFaq();
}

function updateFaq()
{
 const iconsList = document.querySelectorAll(".faq__icon");
 const innerList = document.querySelectorAll(".faq__inner");
 for (let count = 0; count < iconsList.length; count++)
 {
  iconsList[count].addEventListener("click", function(icon){
   updateFaqIcon(icon.currentTarget, innerList[count]);
  })
 }
}

function updateFaqIcon(icon, inner)
{
 if (icon.classList.contains("fa-plus"))
 {
  icon.classList.remove("fa-plus");
  icon.classList.add("fa-minus");
  toggleDisplay(inner, "initial")
 }
 else
 {
  icon.classList.remove("fa-minus");
  icon.classList.add("fa-plus");
  toggleDisplay(inner, "none");
 }
}

function toggleDisplay(element, displayValue)
{
 element.style.display = displayValue; 
}

// event listener
window.addEventListener("DOMContentLoaded", loadHtml);