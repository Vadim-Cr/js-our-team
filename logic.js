// todo Utilizzando i dati forniti per creare un array di oggetti per rappresentare i membri del team.
// todo Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// todo MILESTONE 0:
// Create the array with the given info.
const card = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "immagine": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "immagine": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "immagine": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",	
        "immagine": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "immagine": "scott-estrada-developer.jpg"
    },

    {
        "nome":"Barbara Ramos",
        "ruolo": "Graphic Designer",
        "immagine": "barbara-ramos-graphic-designer.jpg"
    },
];

//  todo MILESTONE 1:
// todo Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// todo MILESTONE 2:
// todo Stampare le stesse informazioni su DOM sottoforma di stringhe
// Select the container element
const myCardContainer = document.querySelector(".container");

// for loop over the card array
for (let i = 0; i < card.length; i++) {
  console.log(card[i]);

  // Create a new div element
  const divCardElement = document.createElement("div");

  // Create a new paragraph element with template literals
  const pCardFotoElement = document.createElement("div");
  const pCardNameElement = document.createElement("p");
  const pCardRoleElement = document.createElement("p");

    pCardFotoElement.innerHTML = `<img src="/img/${card[i].immagine}" alt="${card[i].immagine}">`;
    pCardNameElement.textContent = `${card[i].nome}}`;
    pCardRoleElement.textContent = `${card[i].ruolo}`;

  // Append the paragraph element to the div element
  divCardElement.appendChild(pCardFotoElement);
  divCardElement.appendChild(pCardNameElement);
  divCardElement.appendChild(pCardRoleElement);

  // add a class to the divCard
    divCardElement.classList.add("card");

  //add class to the name 
    pCardNameElement.classList.add("my_name");
  //add class to the role 
    pCardRoleElement.classList.add("my_title");

  // Append the div element to the container
  myCardContainer.appendChild(divCardElement);
};

// todo BONUS 1:
// todo Trasformare la stringa foto in una immagine effettiva


