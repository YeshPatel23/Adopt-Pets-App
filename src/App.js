import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="cockatiel"></Pet>
      <Pet name="Doink" animal="Cat" breed="Mix"></Pet> */}
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     })
//   );
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
