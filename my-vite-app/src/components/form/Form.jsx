import { useState } from "react";

export default function FlashForm({onSubmit}) {
  //useState hoook used to take care of the formdata state

  const [formData, setFormData] = useState({ question: "", answer: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({question:"", answer:""});
    //prevent default stops default behaviour going to the address bar
    console.log("Form has been submitted:", formData);
  };
  //event = input change
  const handleChange = (e) => {
    //target is the DOM element that triggered teh event
    const { name, value } = e.target;

    //this updates the state with the new value from the input field - property of 'name' is updated with the new value.
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input
          type="text"
          name="question"
          value={formData.question}
          onChange={handleChange}
        />
      </label>
      <label>
        Answer:
        <input
          type="text"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
