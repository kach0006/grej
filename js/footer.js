const accordionHeader = document.querySelector(".accordion-content");

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    console.log("Click!");
    accordionHeader.classList.toggle("active");
  });
});
