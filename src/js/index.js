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

// Consumiendo archivo Json para obtener la data FAQS
async function getFAQs() {
  const response = await fetch("http://localhost:3000/faqs");
  const faqs = await response.json();

  faqs.forEach(function (item) {
    createFAQItem(item.question, item.answer);
  });
}

// Consumiendo archivo Json para obtener la data Projects
async function getProjects() {
  const response = await fetch("http://localhost:3000/projects");
  const projects = await response.json();

  projects.forEach(function (item) {
    createProjectItem(item.image, item.title, item.category);
  });
}

// Consumiendo archivo Json para obtener la data teams
async function getTeam() {
  const response = await fetch("http://localhost:3000/teams");
  const teams = await response.json();

  teams.forEach(function (item) {
    createTeamItem(item.image, item.name, item.area, item.slogan);
  });
}

// Consumiendo archivo Json para obtener la data StrategyCards
async function getStrategyCards() {
  const response = await fetch("http://localhost:3000/strategyCards");
  const strategyCards = await response.json();

  strategyCards.forEach(function (item) {
    createStrategyCardItem(item.id, item.title, item.description);
  });
}

getServices();
getTestimonials();
getFAQs();
getProjects();
getTeam();
getStrategyCards();

//Generando la estructura HTML para mostrar la lista de StrategyCards con la data de JSON();
function createStrategyCardItem(id, title, description) {
  const strategyCardsList = document.querySelector(".strategy-cards-container");
  const strategyCardItem = document.createElement("div");
  strategyCardItem.classList.add("strategy-card");

  const orderItem = document.createElement("div");
  orderItem.classList.add("order");
  orderItem.textContent = `0${id}`;
  strategyCardItem.append(orderItem);

  const infoItem = document.createElement("div");
  infoItem.classList.add("info");
  const infoTitle = document.createElement("h3");
  infoTitle.textContent = title;
  const infoDescription = document.createElement("p");
  infoDescription.textContent = description;
  infoItem.append(infoTitle, infoDescription);

  strategyCardItem.append(infoItem);

  strategyCardsList.append(strategyCardItem);
}

//Generando la estructura HTML para mostrar la lista de Teams con la data de JSON();
function createTeamItem(image, name, area, slogan) {
  const teamList = document.querySelector(".team-list");
  const teamItemContainer = document.createElement("div");
  teamItemContainer.classList.add("team-item");

  const imageTeam = document.createElement("img");
  imageTeam.setAttribute("src", image);
  teamItemContainer.append(imageTeam);

  const nameTeam = document.createElement("h3");
  nameTeam.textContent = name;
  teamItemContainer.append(nameTeam);

  const paragraph1 = document.createElement("p");
  paragraph1.textContent = area;
  teamItemContainer.append(paragraph1);

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = slogan;
  teamItemContainer.append(paragraph2);

  teamList.append(teamItemContainer);
}

//Generando la estructura HTML para mostrar la lista de Projects con la data de JSON();
function createProjectItem(image, title, category) {
  const projectList = document.querySelector(".projects-container");
  const projectItemContainer = document.createElement("div");
  projectItemContainer.classList.add("project");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  projectItemContainer.append(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  projectItemContainer.append(titleElement);

  const paragraph = document.createElement("p");
  paragraph.textContent = category;
  projectItemContainer.append(paragraph);

  projectList.append(projectItemContainer);
}

//Generando la estructura HTML para mostrar la lista de FAQS con la data de JSON();
function createFAQItem(question, answer) {
  const faqsList = document.querySelector(".faqs-list");
  const faqItemContainer = document.createElement("div");
  faqItemContainer.classList.add("faqs-item");

  const faqContainer = document.createElement("details");
  const faqQuestion = document.createElement("summary");
  faqQuestion.textContent = question;

  const faqAnswer = document.createElement("p");
  faqAnswer.textContent = answer;

  faqContainer.append(faqQuestion, faqAnswer);

  faqsList.append(faqContainer);
}

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
