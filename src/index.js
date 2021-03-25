//import animals from "./data";
//Destructuring arrays
//const [cat, dog] = animals;
//console.log(cat);
//console.log(dog);

//Destructuring objects
//const { name, sound } = cat;
//console.log(name, sound);
//const {name: catName, sound:catSound} = cat;
//console.log(catName, catSound);
//const { name = "fluffy", sound = "bufff" } = cat;
//console.log(name, sound);//default value
// const {
//   feeding: { food, water }
// } = cat;
// console.log(food, water); // object within object

//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
console.log(honda);

const {
  model: hondaModel,
  coloursByPopularity: [hondaTopColour, color2],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  model: teslaModel,
  coloursByPopularity: [teslaTopColour, color3],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
// console.log(hondaModel);
// console.log(hondaTopSpeed);
//console.log(zeroToSixty);
//console.log(coloursByPopularity);
//console.log(hondaTopColour);
//console.log(color2);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
