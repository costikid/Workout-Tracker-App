import { useState } from "react";
import { postGoals } from "../services/api.goals";
import './GoalsForm.css'

function GoalsForm({ setGoals }) {
  const [title, setTitle] = useState<String>('');
  const [notation, setNotation] = useState<String>('');

  async function handleSubmit(goal) {
    goal.preventDefault()
    const data = {
      title: goal.target.title.value,
      notation: goal.target.notation.value,
    }
    const output = await postGoals(data);
    setGoals((prev) => [...prev, output])
    setTitle('')
    setNotation('')
  }

  return (
    <form id="form" onSubmit={handleSubmit} method="POST">
      <h2>Create new Goal</h2>
      <label htmlFor="title">Title</label>
      <input value={title} onChange={(goal) => { setTitle(goal.target.value) }} type="text" id='title' name='title' placeholder="Insert a title..." required></input>
      <label htmlFor="notation">Notation<span className="max-char"> (max 300 characters)</span></label>
      <textarea value={notation} onChange={(goal) => { setNotation(goal.target.value) }} type="text" id="notation" name="notation" maxLength={300} placeholder="Insert notation..."></textarea>
      <button className="create-btn" type="submit">Create</button>
    </form>
  );
}

export default GoalsForm;
