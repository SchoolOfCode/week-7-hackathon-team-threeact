import FlashCard from "./Flashcard";
import "./FlashCardContainer.css";

export default function FlashCardContainer({ flashcards, setFlashcards }) {
  const handleRemove = (index) => {
    const updatedFlashcards = [...flashCards];
    const [removedCard] = updatedFlashcards.splice(index, 1);
    updatedFlashcards.push(removedCard);
    setFlashcards(updatedFlashcards);
  };
  return (
    <div className="flashcards-container">
      {flashcards.map((flashcard, index) => (
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
