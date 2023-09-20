import { Card } from "../../components/Card";
import "./style.css";

const handleClick = (id: string) => {
  console.log(id);
};

export function App() {
  return (
    <>
      <Card back="A" flipped id="1" handleClick={handleClick} />
      <Card back="B" flipped id="2" handleClick={handleClick} />
      <Card back="C" flipped id="3" handleClick={handleClick} />
    </>
  );
}
