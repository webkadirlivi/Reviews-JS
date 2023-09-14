//local reviews data - not learn AJAX now cuz i using local data
const reviews = [
  {
    id: 1,
    name: "Sara Jones",
    job: "UX DESIGNER",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    text: "lorem20 lorem ipsum dolor sit am lorem ipsum dolor sit lore m Null d Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor",
  },
  {
    id: 2,
    name: "John Doe",
    job: "CEO",
    img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    text: "lorem20 lorem ipsum dolor sit am lorem ipsum dolor sit lore m Null d Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor",
  },
  {
    id: 3,
    name: "Bob Gray",
    job: "DevOps",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    text: "lorem20 lorem ipsum dolor sit am lorem ipsum dolor sit lore m Null d Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor",
  },
  {
    id: 4,
    name: "Taylor Mely",
    job: "Intern",
    img: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    text: "lorem20 lorem ipsum dolor sit am lorem ipsum dolor sit lore m Null d Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor",
  },
];

//SELECTED İTEMS
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("rev-info");

//SELECTED BUTTONS
const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");
const randomBtn = document.querySelector(".random-btn");

//STARTİNG İTEM WHEN SITE LOADED FIRST TIME from our array
let currentItem = 0;

//load initial(ilk) item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//
function showPerson(person) {
  const item = reviews[currentItem];
  image.src = item.img;
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  //arrayın son itemına gelince başa dönmeyi sağla!
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  const random = Math.floor(Math.random() * reviews.length);
  currentItem = random;
  showPerson(currentItem);
});
