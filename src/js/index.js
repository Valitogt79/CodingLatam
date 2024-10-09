// creanndo la funcion para el menu
function toggleMenu() {
  const navButtons = document.querySelectorAll(".btn-nav");
  const navMenu = document.querySelector("nav ul");

  navButtons.forEach((element) => {
    element.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  });
}

toggleMenu();

// Consumiendo archivo Json para obtener la data de servicios
async function getServices() {
  const response = await fetch("http://localhost:3000/services");
  const services = await response.json();

  services.forEach(function (service) {
    createServiceItem(
      service.image,
      service.title,
      service.description,
      "Learn More",
      service.link,
    );
  });
}

// Consumiendo archivo Json para obtener la data testimonials
async function getTestimonials() {
  const response = await fetch("http://localhost:3000/testimonials");
  const testimonials = await response.json();

  testimonials.forEach(function (testimonial) {
    createTestimonialItem(
      testimonial.author,
      testimonial.image,
      testimonial.area,
      testimonial.testimonial,
    );
  });
}

getServices();
getTestimonials();

// Generando la estructura html para mostrar lista de servicios, con la data del Json
function createServiceItem(imageURL, title, description, linkText, linkHref) {
  const servicesList = document.querySelector(".services-list");
  const serviceItemContainer = document.createElement("div");
  serviceItemContainer.classList.add("services-item");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", imageURL);
  serviceItemContainer.append(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  serviceItemContainer.append(titleElement);

  const paragraph = document.createElement("p");
  paragraph.textContent = description;
  serviceItemContainer.append(paragraph);

  const link = document.createElement("a");
  link.textContent = linkText;
  link.setAttribute("href", linkHref);
  serviceItemContainer.append(link);

  servicesList.append(serviceItemContainer);
}

// Generando la estructura html para mostrar lista de testimonials, con la data del Json
function createTestimonialItem(author, image, area, testimonial) {
  const testimonialsList = document.querySelector(".testimonials-list");
  const testimonialsItemContainer = document.createElement("div");
  testimonialsItemContainer.classList.add("testimonials-item");

  const paragraph = document.createElement("p");
  paragraph.textContent = testimonial;

  const testimonialAuthorContainer = document.createElement("div");
  testimonialAuthorContainer.classList.add("testimonials-author");

  const testimonialImageContainer = document.createElement("div");
  testimonialImageContainer.classList.add("image");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  testimonialsItemContainer.append(imageElement);

  const testimonialBioContainer = document.createElement("div");
  testimonialBioContainer.classList.add("bio");

  const authorElement = document.createElement("h3");
  authorElement.textContent = author;
  testimonialBioContainer.append(authorElement);

  const areaElement = document.createElement("p");
  areaElement.textContent = area;
  testimonialBioContainer.append(areaElement);

  testimonialAuthorContainer.append(
    testimonialImageContainer,
    testimonialBioContainer,
  );

  testimonialsItemContainer.append(paragraph, testimonialAuthorContainer);

  testimonialsList.append(testimonialsItemContainer);
}
