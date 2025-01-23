import { Flashcard } from "/src/components/flashcards/FlashCard.jsx";

export default function () {
  return (
    <div>       
         {flashCards.map((Flashcard, index) => (
        <Flashcard question={Flashcard.question} answer={Flashcard.answer}/>
      ) )}
        6
    </div>
  );
}