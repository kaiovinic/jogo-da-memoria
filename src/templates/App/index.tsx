import { Grid } from "../../components/Grid";
import { Cards } from "../../data/Cards";
import "./style.css";

// const handleClick = (id: string) => {
//   console.log(id);
// };

export function App() {
  return (
    <div className="App">
      <Grid cards={Cards} />
    </div>
  );
}
