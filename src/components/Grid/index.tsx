import { duplicateRegenerateSortArray } from "../../utils/card-utius";
import { Card, CardProps } from "../Card";
import "./style.css";
import { useState, useRef } from "react";

export interface GridProps {
  cards: CardProps[];
}

export function Grid({ cards }: GridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const first = useRef<CardProps | null>(null);
  const second = useRef<CardProps | null>(null);
  const unflip = useRef(false);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const handleReset = () => {
    setStateCards(duplicateRegenerateSortArray(cards));
    setMatches(0);
    setMoves(0);
    first.current = null;
    second.current = null;
    unflip.current = false;
  };

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      // Se o ID do cartão não for o ID clicado, não faz nada
      if (card.id !== id) return card;
      // Se o cartão já estiver virado, não faz nada
      if (card.flipped) return card;

      // Desviro possíveis cartas erradas
      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false;
      }

      // Se o cartão ainda não estiver virado, virá
      card.flipped = true;

      // Configurar primeiro e segundo cartão clicado
      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      // Se eu tenho os dois cartões virados
      // Posso checar se estão compatíveis
      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          first.current = null;
          second.current = null;
          setMatches((matches) => matches + 1);
        } else {
          //  A pessoa errou
          unflip.current = true;
        }
        setMoves((moves) => moves + 1);
      }

      return card;
    });
    setStateCards(newStateCards);
  };
  return (
    <>
      <div className="text">
        <h1>Jogo da Mémoria</h1>
        <p>
          Moves: {moves} | Matches: {matches} |{" "}
          <button onClick={() => handleReset()}>Reset</button>
        </p>
      </div>
      <div className="grid">
        {stateCards.map((card) => (
          <Card key={card.id} {...card} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}
