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

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
