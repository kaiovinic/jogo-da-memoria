import "./style.css";

export function Card() {
  return (
    <div className="card">
      <div className="card_content">
        <div className="card_face card_face--front">?</div>
        <div className="card_face card_face--back">!</div>
      </div>
    </div>
  );
}
