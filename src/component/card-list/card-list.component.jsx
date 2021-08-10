import "./card-list.component.css";
import { Card } from "../card/card.component";

export const CardList = (char) => {
  return (
    <div className="card-list">
      {char.characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};
