import "./App.css";
import Header from "./components/Header";
import Flashcard from "./components/flashcards/FlashCard.jsx";
import FlashForm from "./components/form/Form.jsx";

import Footer from "./components/Footer";


function App() {
  return (
    <>

      <Header />
      <FlashForm />
      <Flashcard />

      <Footer/>

    </>
  );
}

export default App;
