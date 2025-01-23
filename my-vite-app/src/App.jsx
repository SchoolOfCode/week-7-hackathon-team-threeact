import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Flashcard from "./components/flashcards/FlashCard.jsx";
import FlashForm from "./components/form/Form.jsx";

import Footer, { Footer2 } from "./components/Footer";


function App() {
  const [flashCards, setFlashcards] = useState([]);
  const handleFormSubmit = (formData) => {
    setFlashcards([...flashCards, formData])
  }
  return (
    <>

      <Header />
      <FlashForm onSubmit={handleFormSubmit}/>
      {flashCards.map((flashCard, index) => (
        <Flashcard question={flashCard.question} answer={flashCard.answer}/>
      ) )}
      

      <Footer/>
      <Footer2/>

    </>
  );
}

export default App;
