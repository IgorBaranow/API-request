async function retrieveAll() {
  const results = await Promise.all([
    fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1"
    ),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ]);

  const data = await Promise.all(results.map((result) => result.json()));
  return data;
}

async function getData() {
  try {
    const data = await retrieveAll();
    const jsonRandomDogFact = data[0];
    const jsonRandomDogImage = data[1];
    const imgLink = jsonRandomDogImage.message;
    console.log(jsonRandomDogFact);

    // create card element inside cards section
    const cardsSection = document.querySelector(".cards");
    const card = document.createElement("div");
    card.classList.add("card");
    cardsSection.appendChild(card);

    // add h3 title to the card
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card__title");
    card.appendChild(cardTitle);
    cardTitle.innerHTML = jsonRandomDogFact.type;

    // add img
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", imgLink);
    card.appendChild(cardImage);
    cardImage.classList.add("card__img");

    // add body to the card
    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card__description");
    card.appendChild(cardDescription);
    cardDescription.innerHTML = jsonRandomDogFact.text;
  } catch (error) {
    console.log(error);
  }
}
getData();
getData();
getData();
