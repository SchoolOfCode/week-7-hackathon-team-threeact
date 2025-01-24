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
    {
      question: "What is a component in React?",
      answer:
        "A component is a reusable, independent piece of UI that can be a function or class.",
    },
    {
      question: "How do you handle user events in React?",
      answer:
        "You handle events in React by adding event listeners like onClick or onChange to elements.",
    },
    {
      question: "What is the difference between state and props?",
      answer:
        "State is local and mutable, while props are immutable and passed from parent to child components.",
    },
    {
      question: "Why use className instead of class in JSX?",
      answer:
        "Class is a reserved word in JavaScript, so React uses className for CSS classes.",
    },
  ]);
  const handleFormSubmit = (formData) => {
    setFlashcards((prevFlashcards) => {
      const updatedFlashcards = [formData, ...prevFlashcards];
      return updatedFlashcards.slice(0, 100);
    });
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
