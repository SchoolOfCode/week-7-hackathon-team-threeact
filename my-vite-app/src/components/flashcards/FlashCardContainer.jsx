import FlashCard from "./Flashcard";
import "./FlashCardContainer.css";

export default function FlashCardContainer({ flashcards, setFlashcards }) {
  const handleRemove = (index) => {
    const updatedFlashcards = [...flashcards];
    const [removedCard] = updatedFlashcards.splice(index, 1);
    updatedFlashcards.push(removedCard);
    setFlashcards(updatedFlashcards);
  };
  return (
    <div className="flashcards-container">
      {flashcards.slice(0, 6).map((flashcard, index) => (
        <FlashCard
          key={index}
          question={flashcard.question}
          answer={flashcard.answer}
          onRemove={() => handleRemove(index)}
        />
      ))}
    </div>
  );
}
