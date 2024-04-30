import { useState } from "react";
import "./GoalsForm.css";

function GoalsForm({ setGoals }) {
  const [title, setTitle] = useState("");
  const [notation, setNotation] = useState("");
  //pass data instead of the backend output
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      notation: event.target.notation.value,
    };

    setGoals((prev) => [...prev, data]);
    setTitle("");
    setNotation("");
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h2>Create new Goal</h2>
      <label htmlFor="title">Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
        name="title"
        placeholder="Insert a title..."
        required
      />
      <label htmlFor="notation">
        Notation<span className="max-char"> (max 300 characters)</span>
      </label>
      <textarea
        value={notation}
        onChange={(e) => setNotation(e.target.value)}
        type="text"
        id="notation"
        name="notation"
        maxLength={300}
        placeholder="Insert notation..."
      />
      <button className="create-btn" type="submit">
        Create
      </button>
    </form>
  );
}

export default GoalsForm;
