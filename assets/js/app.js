//NAVIGATION//
let burgerMenuOpen = document.querySelector(".burgerMenuOpen");
let burgerMenuClose = document.querySelector(".burgerMenuClose");
let navLinks = document.querySelector(".nav-links");
/*Let = En literal der bruges til at deklarere en variabel.*/
/*document = kobler det til ens html */
/*querySelector =  Søger efter elementer i dokumentet, 
der har class eller id*/

burgerMenuOpen.addEventListener("click", () => {
  /*Fortæller at der skal være en Click event listener på array'en*/
  navLinks.classList.add("active");
  burgerMenuOpen.classList.add("active");
  burgerMenuClose.classList.add("active");
  /*Laver en classList på arrays for at manipulere class samtidig 
  en add("active") på for så at kunne manipulere class i css. */
});

burgerMenuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  burgerMenuOpen.classList.remove("active");
  burgerMenuClose.classList.remove("active");
  /*Laver et click event på burgermenuclose som remover active class ved 
  click. */
});

//BILLEDE GALLERY //
/*variabeldeklarationer*/
let largeImg = document.querySelector(".largeImg");
let smallImgs = document.querySelectorAll(".smallImg");

//For-løkke til at tilføje event listeners som gentager hvert element i smallImgs
for (let index = 0; index < smallImgs.length; index++) {
  smallImgs[index].addEventListener("click", (data) => {
    largeImg.src = data.target.src;
    /*Når et lille billede klikkes, opdateres src-attributten af largeImg 
    til src-værdien af det klikkede billede (data.target). Dette gør, at 
    det store billede ændres til at vise det samme billede som det klikkede
     lille billede.*/

    /*Fjerne active "class" på alle img */
    document.querySelector(".smallImg").classList.remove("active");

    /*Tilføje active "class" på det click event der er aktiv */
    data.target.classList.add("active");
  });
}

//FORM VALIDERING//
let form = document.querySelector(".formContainer");

form.addEventListener("submit", function (event) {
  /*tilføjer event listener til form. Lytter specifikt efter "submit" event, 
  hvilket sker, når brugeren forsøger at sende formularen enten ved at trykke 
  på en submit-knap*/
  event.preventDefault;
  /*Når brugeren prøver at sende formularen, aktiveres vores 
  event listener-funktion, som straks kalder event.preventDefault(). 
  Dette forhindrer, at formularen bliver sendt og siden genindlæses, 
  hvilket giver os mulighed for at håndtere formularens data på vores 
  egen måde. For eksempel kan vi tjekke om brugeren har udfyldt alle 
  felterne korrekt eller sende dataene til serveren uden at genindlæse 
  siden.*/
});

//variabeldeklarationer
let nameInput = document.querySelector("#nameInput");
let mailInput = document.querySelector("#mailIput");
let textArea = document.querySelector("#textArea");
let submitInput = document.querySelector("#submitIput");

// Initialiser variabler
let isValid = true;
/* boolean variabel; en simpel datatype, der kun kan have én af to værdier: 
true eller false. */
let errorMessage = [];

// Valider navn
if (nameInput.value.trim() === "") {
  /*For hvert inputfelt, tjekkes om værdien (efter at have fjernet 
  eventuelle whitespace med trim()) er tom ("").*/
  /*=== sikrer, at sammenligningen kun returnerer true, 
  hvis begge værdier er af samme type og har samme værdi.*/
  isValid = false;
  nameInput.classList.add("Error");
  errorMessage.push("Skriv dit navn");
} else {
  nameInput.classList.remove("Error");
}

// Valider E-mail
if (mailInput.value.trim() === "") {
  /*value henter eller indstiller værdi i inputfelt:*/
  isValid = false;
  mailInput.classList.add("Error");
  errorMessage.push("Skriv din E-mail");
} else {
  mailInput.classList.remove("Error");
}

// Valider Textarea
if (textArea.value.trim() === "") {
  isValid = false;
  textArea.classList.add("Error");
  errorMessage.push("Skriv noget tekst");
} else {
  textArea.classList.remove("Error");
}

/*if statement som siger at hvis alle felter er udfyldt korrekt,
send formularen*/
if (isValid) {
  form.submit();
}
