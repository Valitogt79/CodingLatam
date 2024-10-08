async function getServices() {
  const response = await fetch("http://localhost:3000/services");
  const services = await response.json();
  console.log(services);

  services.map((service) =>
    createServiceItem(
      service.image,
      service.title,
      service.description,
      "Learn More",
      service.link,
    ),
  );
}

getServices();

function createServiceItem(imageUrl, title, description, linkText, linkHref) {
  const servicesList = document.querySelector(".services-list");
  const serviceItemContainer = document.createElement("div");
  serviceItemContainer.classList.add("services-item");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", imageUrl);
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

createServiceItem();
