import "./card.component.css";

export const Card = (char) => (
  <div className="card-container">
    <img
      src={`https://genshinlist.com/assets/img/characters/${char.character.slug}.png`}
      alt="character"
    />
    <h1 className="name-character">{char.character.name}</h1>
    <div className="information-card">
      <span>Rarity: {char.character.rarity} Star</span>
      <span>Vision: {char.character.vision}</span>
      <span>Weapon: {char.character.weapon}</span>
      <span>Gender: {char.character.gender}</span>
      <span>Birthday: {char.character.birthday}</span>
      <span>Obtain: {char.character.obtain}</span>
    </div>
  </div>
);
