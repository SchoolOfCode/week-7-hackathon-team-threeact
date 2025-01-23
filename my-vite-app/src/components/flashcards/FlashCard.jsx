import { useState } from "react"

import "./Flashcard.css"

export default function Flashcard( {question, answer}){
    // Will be a image/button to allow change of state between Q and A 
        
            const [isQuestion, setIsQuestion] = useState(true);
            const handleToggle = () => {setIsQuestion (!isQuestion)};
        

    return (
        <div className="Flashcard" onClick = {handleToggle}>
            {isQuestion ? (<p>🤨 {question}</p>) : (<p>🤩 {answer}</p>)}; 
        </div>
    );
}
    // Default state is Q side 
    // Changes to the A side upon click - LIKE a button (and back again)
    // Holds a text area for the question 
    // Also holds an emoji (text-style) Q🤨 A🤩
    
    // A function that takes in the Q&A from the form
    // A variable that allows Toggle between default (Q) and (A) using useState
    // Return the relevant side of the card via a ternary operator
    // Exported and called within app.jsx


