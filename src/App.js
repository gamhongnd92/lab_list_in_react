import "./App.css";
import DessertsList from "./DessertsList";
import { people } from "./people";
import { getImageUrl } from "./utils";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function List() {
  const listItem = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        know for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItem}</ul>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <h2>List of low calories dessert</h2>
      {/* <DessertsList data={desserts}></DessertsList> */}
      <List></List>
    </div>
  );
}

export default App;
