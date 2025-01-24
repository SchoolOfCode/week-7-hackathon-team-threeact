import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
// import Flashcard from "./components/flashcards/FlashCard.jsx";
import FlashForm from "./components/form/Form.jsx";
import FlashCardContainer from "./components/flashcards/FlashCardContainer.jsx";

import Footer, { Footer2 } from "./components/Footer";

function App() {
  const [flashCards, setFlashcards] = useState([
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a reusable, independent piece of UI that can be a function or class.",
    },
    {
      question: "How do you pass data to a component in React?",
      answer: "Data is passed to a component via props (properties).",
    },
  ]);
  const handleFormSubmit = (formData) => {
    setFlashcards([...flashCards, formData]);
  };

  return (
    <>
      <Header />
      <FlashForm onSubmit={handleFormSubmit} />
      <FlashCardContainer
        flashcards={flashCards}
        setFlashcards={setFlashcards}
      />
      <Footer />
      <Footer2 />
    </>
  );
}

export default App;
