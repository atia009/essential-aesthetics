// objects
const productsList = [
 [
  {
   benefits: `UVA/UVB sun protection. Calms and protects acne-prone skin. Leaves no residue`,
   brand: "elta md",
   desc: "Oil-free Elta MD UV Clear helps calm and protect sensitive skin types prone to discoloration and breakouts associated to acne and rosacea. It contains niacinamide (vitamin B3), hyaluronic acid and lactic acid, ingredients that promote the appearance of healthy-looking skin. Very lightweight and silky, it may be worn with makeup or alone. Choose from tinted and untinted formulas for use every day.",
   name: "dual action scrub",
   price: 37,
   size: "1.7 oz.",
   src: "../images/brand-01-01.jpg",
  },
  {
   benefits: `Helps repair skin barrier damage, calm redness, and improve hydration.Contains malachite extract, which helps to detox and hydrate. Delivers essential nutrients while improving skin's ability to absorb and maintain hydration. pH-balanced`,
   brand: "elta md",
   desc: "A gentle essence toner that soothes, hydrates and detoxifies skin while maintaining a healthy pH balance, and the first step in our breakthrough Skin Recovery System.",
   name: "recovery essence toner",
   price: 31,
   size: "7.3 oz.",
   src: "../images/brand-01-02.jpg",
  },
  {
   benefits: `Safe for all skin types. Enzymes help reduce inflammation. pH-balanced.Gentle enough for daily use, morning and night`,
   brand: "elta md",
   desc: "Give your skin a fresh start with EltaMD Foaming Facial Cleanser. A gentle enzyme and amino acid blend loosens makeup, oil and other impurities on the skin and in the pores. The thick, rich foam gently cleanses leaving your skin feeling clean and balanced.",
   name: "foaming facial cleanser",
   price: 11.50,
   size: "2.7 oz.",
   src: "../images/brand-01-03.jpg",
  },
 ],
 [
  {
   benefits: `Removes stubborn dirt, oil and makeup. Clarifies and removes traces of impurities. Ideal as body spray for blemishes`,
   brand: "epionce",
   desc: "Purifying Toner helps remove traces of dirt, oil and makeup. Botanical ingredients reduce surface shine while helping control factors that can lead to the visible appearance of problem or irritated skin. Set at optimal pH.",
   name: "purifying toner",
   price: 30,
   size: "4 fl. oz.",
   src: "../images/brand-02-01.jpg",
  },
  {
   benefits: `Helps smooth and refine texture. Gently cleanses without irritation. Leaves skin feeling hydrated`,
   brand: "epionce",
   desc: "A must-have cleanser for normal to combination skin, Gentle Foaming Cleanser effectively removes dirt, oil and other surface impurities including makeup without leaving the skin feeling tight, dry or stripped of its natural protective oils. Set at optimal pH, making it an ideal daily cleanser for most skin types.",
   name: "gentle foaming cleanser",
   price: 34,
   size: "6 fl. oz.",
   src: "../images/brand-02-02.jpg",
  },
  {
   benefits: `Renewal technology encourages healthier skin. Hydrates rough areas for softer, smoother skin. Visibly improves appearance of dry, cracked skin`,
   brand: "epionce",
   desc: "Luxuriously rich all-over body cream provides instant, long-lasting hydration to soften and smooth the skin. Provides maximum hydration for dry skin on the hands, feet and elbows; body butter consistency ideal for daily use.",
   name: "enriched body cream",
   price: 41,
   size: "8 oz.",
   src: "../images/brand-02-03.png",
  },
 ],
 [
  {
   benefits: `Provides both physical and chemical exfoliation benefits. Reduces surface oil. Ideal for use on face + body`,
   brand: "zo skin health",
   desc: "Dual chemical and physical exfoliation gently clears breakouts while leaving skin exceptionally smooth and radiant.",
   name: "dual action scrub",
   price: 80,
   size: "4 oz.",
   src: "../images/brand-03-01.jpg",
  },
  {
   benefits: `Physically exfoliates off dead skin cells and other debris to improve skin radiance. Magnesium oxide crystals wash away clean, leaving skin instantly soft and smooth`,
   brand: "zo skin health",
   desc: "Dual chemical and physical exfoliation gently clears breakouts while leaving skin exceptionally smooth and radiant.",
   name: "exfoliating polish",
   price: 67,
   size: "2.3 oz.",
   src: "../images/brand-03-02.jpg",
  },
  {
   benefits: `Sulfate-free. Effectively cleans, hydrates and soothes skin. Rich, creamy formula rinses clean without leaving any residue`,
   brand: "zo skin health",
   desc: "Cleanses away impurities while minimizing dryness and irritation.",
   name: "hydrating cleanser",
   price: 45,
   size: "6.7 fl. oz.",
   src: "../images/brand-03-03.jpg",
  },
 ],
]

const filtersList = [
  [
    {
      className: `selected hidden`,
      data: ``,
      title: `Sort`,
    },
    {
      className: `class="filter__option"`,
      data: `data-class="low"`,
      title: `Price (Low to High)`,
    },
    {
      className: `class="filter__option"`,
      data: `data-class="high"`,
      title: `Price (High to Low)`,
    },
    {
      className: `class="filter__option"`,
      data: `data-class="a"`,
      title: `Name (A to Z)`,
    },
    {
      className: `class="filter__option"`,
      data: `data-class="z"`,
      title: `Name (Z to A)`,
    },
  ],
]

// variables
const BRAND = sessionStorage.getItem("brandName");
const BRAND_INDEX = sessionStorage.getItem("brandIndex");
const breadCrumbs = document.querySelector(".breadCrumbs");
const products = document.querySelector(".products");
const filters = document.querySelector(".filters");
const searchContainer = document.querySelector(".search-container");

// functions
function updateActive()
{
 const pages = document.querySelectorAll(".page__link");
 pages.forEach(function(page) 
 {
  if (page.innerHTML === "Products")
  {
   page.classList.add("active");
  }
  else 
  {
   page.classList.remove("active");
  }
 })
}

function updateTitle()
{
 const title = document.querySelector(".title");
 title.innerHTML = `${BRAND} | Essential Aesthetics`;
}

function loadHtml()
{
 loadBreadCrumb();
 loadSearch();
 loadSortBy();
 loadProducts();
} 

function loadBreadCrumb(brandName = BRAND)
{
 breadCrumbs.innerHTML = `<li class="breadCrumb"><a href="products.html" class="breadCrumb__link">Products</a></li>
 <li class="breadCrumb"><a href="product.html" class="breadCrumb__link">${brandName}</a></li>`
}

function loadSortBy()
{
  for (let filterCount = 0; filterCount < filtersList.length; filterCount++)
  {
    filters.insertAdjacentHTML(`beforeend`, `<select class="filter"></>`);
  }
  loadFilters();
}

function loadFilters()
{
  let filterCategories = document.querySelectorAll(`.filter`);
  for (let filterCount = 0; filterCount < filtersList.length; filterCount++)
  {
    let sortList = filtersList[filterCount].map(function(option)
    {
      return `<option ${option.className} value="${option.title}" ${option.data}>${option.title}</option>`
    })
    filterCategories[filterCount].innerHTML = sortList.join("");
  }
  addFilterFunctionality();
}

function updateSortBy()
{
  filters.innerHTML = ``;
}

function addFilterFunctionality()
{
  let filterCategories = document.querySelectorAll(`.filter__option`);
  filterCategories.forEach(function(filter){
    filter.addEventListener("click", function(option){
      updateProductsByFilter(option.currentTarget.dataset.class);
      loadProducts();
    })
  })
}

function updateProductsByFilter(filterName)
{
  switch(filterName)
  {
    case "low":
      productsList[BRAND_INDEX].sort(function(product1, product2) {
        return product1.price - product2.price;
      })
      break;
    case "high":
      productsList[BRAND_INDEX].sort(function(product1, product2) {
        return product2.price - product1.price;
      })
      break;
    case "a":
      productsList[BRAND_INDEX].sort(function(product1, product2) {
        let result = 0;
        if (product1.name < product2.name)
        {
          result = -1;
        }
        if (product1.name > product2.name)
        {
          result = 1;
        }
        return result;
      })
      break;
    case "z":
      productsList[BRAND_INDEX].sort(function(product1, product2) {
        let result = 0;
        if (product1.name < product2.name)
        {
          result = 1;
        }
        if (product1.name > product2.name)
        {
          result = -1;
        }
        return result;
      })
      break;
  }
}

function loadSearch()
{
  searchContainer.innerHTML = `<form class="search">
     <input type="text" class="search__input" placeholder="Search...">  
     <button class="search__clear">Clear Search</button>
     <ul class="results"></ul>
    </form>`;
 addClearFunctionality();
 addSearchFunctionality();
}

function addSearchFunctionality()
{
  const search = document.querySelector(".search__input");
  search.addEventListener("input", function(input){
    let userInput = input.target.value;
    if (userInput && userInput.trim().length > 0)
    {
      userInput = userInput.trim().toLowerCase();
      loadResults(updateFilteredArray(productsList, "name", userInput));
    }
    else 
    {
      console.log("empty");  
    }
  })
}

function updateFilteredArray(array, property, value)
{
 let filtered = [];
   for (let index = 0; index < array.length; index++) 
   {
      let object = array[index];
      for (let key in object) 
      {
         if (typeof(object[key] == "object")) 
         {
            let product = object[key];
            if (product[property].includes(value)) 
            {
               filtered.push(product);
            }
         }
      }
   }
   return filtered;
}

function addClearFunctionality()
{
  const clear = document.querySelector(".search__clear");
  clear.addEventListener("click", function(){
    console.log("clearing");
  })
}

function loadResults(results)
{
  results.forEach(function(result)
  {
    console.log(result.name);
  })
}

function loadProducts(brand = BRAND_INDEX)
{
 let brandItems = productsList[brand].map(function(product)
 {
  return `<li class="product">
        <img src="${product.src}" class="product__img"/>
        <h4 class="product__title">${product.brand} ${product.name}, ${product.size}</h4>
        <p class="product__price">$${product.price}</p>
      </li>` 
 })
 products.innerHTML = brandItems.join("");
 loadProductsFunctionality();
}

function loadBenefits(benefitsObject)
{
 let benefitsList = benefitsObject.split(".");
 let benefitsItems = benefitsList.map(function(benefit)
 {
  return `<li class="benefits-list__item">${benefit}</li>`
 })
 return benefitsItems.join("");
}

function loadSelectedProduct(productIndex, brandIndex = BRAND_INDEX)
{ 
  products.innerHTML = `<li class="product">
        <img src="${productsList[brandIndex][productIndex].src}" class="product__img"/>
        <h3 class="product__brand">${productsList[brandIndex][productIndex].brand}</h3>
        <h3 class="product__title">${productsList[brandIndex][productIndex].name}, ${productsList[brandIndex][productIndex].size}</h3>
        <p class="product__price">$${productsList[brandIndex][productIndex].price}</p>
        <section class="desc">
          <h4 class="desc__title">Description</h4>
          <p class="desc__body">${productsList[brandIndex][productIndex].desc}</p>
        </section>
        <section class="benefits">
          <h4 class="benefits__title">Benefits</h4>
          <ul class="benefits-list">${loadBenefits(productsList[brandIndex][productIndex].benefits)}</ul>
        </section>
      </li>`
  updateSortBy();
}

function loadProductsFunctionality()
{
 const selectedProducts = document.querySelectorAll(".product");
 for (let count = 0; count < selectedProducts.length; count++)
 {
  selectedProducts[count].addEventListener("click", function(product)
  {
    loadSelectedProduct(count);
    if (sessionStorage.getItem("lastBrandIndex") != null)
    {
      loadLastSelectedProduct();
    }
    saveLastSelectedProduct(count);
  })
 }
}

function loadLastSelectedProduct()
{
  let brandIndex = sessionStorage.getItem("lastBrandIndex");
  let productIndex = sessionStorage.getItem("lastProductIndex");
  let product = productsList[brandIndex][productIndex];
  products.insertAdjacentHTML(`beforeend`, `<li class="recent">
      <h3 class= "recent__title">Recently Viewed</h3>
      <div class="product">
        <img src="${product.src}" class="product__img"/>
        <h4 class="product__title">${product.brand} ${product.name}, ${product.size}</h4>
        <p class="product__price">$${product.price}</p>
      </li>
    </section>`);
 let recent = document.querySelector(".recent");
 recent.addEventListener("click", function()
 {
   let brandName = productsList[brandIndex][productIndex].brand;
   loadBreadCrumb(brandName);
   storeBrand(brandName, brandIndex);
   loadSelectedProduct(productIndex, brandIndex);
   loadLastSelectedProduct();
   saveLastSelectedProduct(productIndex, brandIndex);
 })
}

function saveLastSelectedProduct(productIndex, brandIndex = BRAND_INDEX)
{
 sessionStorage.setItem("lastBrandIndex", brandIndex);
 sessionStorage.setItem("lastProductIndex", productIndex);
}

function storeBrand(brandName, brandIndex)
{
 sessionStorage.setItem("brandName", brandName);
 sessionStorage.setItem("brandIndex", brandIndex);
}

// event listener
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 updateTitle();
 loadHtml();
})
