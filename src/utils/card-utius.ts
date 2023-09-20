import { CardProps } from "../components/Card";

const keyGen = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const duplicateArray = <T>(array: T[]): T[] => {
  return [...array, ...array]; //ou array.concat(array)
};

export const sortArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

export const regenerateCard = (Cards: CardProps[]): CardProps[] => {
  return Cards.map((Card) => ({ ...Card, id: keyGen() }));
};

export const duplicateRegenerateSortArray = (
  Cards: CardProps[]
): CardProps[] => {
  return sortArray(regenerateCard(duplicateArray(Cards)));
};

console.log(sortArray(duplicateArray([1, 2, 3])));
