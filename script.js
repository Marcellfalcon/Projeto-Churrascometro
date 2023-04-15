// carne - 400 g por pessoa + de 6h - 650
// Cervja - 1200ml por pessoa + de 6h - 2000ml
//Refrigerante/água - 1000ml por pessoa + de 6h 1500ml

//Criaças valem por 0,5

let inputAdults = document.getElementById("adults");
let inputChilden = document.getElementById("childen");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

document.getElementsByTagName("button")[0].addEventListener("click", calculate);

function calculate () {
  // console.log("Calculating");

  let adults = inputAdults.value;
  let childen = inputChilden.value;
  let duration = inputDuration.value;

  let qdtTotalMeat = meatPP(duration) * adults + (meatPP(duration) / 2 * childen);
  let qdtTotalBeer = beerPP(duration) * adults;
  let qdtTotalDrinks = drinksPP(duration) * adults + (drinksPP(duration)/2 * childen)
  
  result.innerHTML = `<p>${qdtTotalMeat}g de Carne.</P>`
  result.innerHTML += `<p>${qdtTotalBeer}ml de Cerveja.</p>`
  result.innerHTML += `<p>${qdtTotalDrinks}ml de Bebidas.</p>`

}

function meatPP(duration) {
  if(duration >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function beerPP(duration) {
  if(duration >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function drinksPP(duration) {
  if(duration >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

