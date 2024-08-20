import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && category) {
      onTaskFormSubmit({
        id: Date.now(), // Simple unique ID generation
        text,
        category
      });
      setText('');
      setCategory(categories[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.filter(c => c !== 'All').map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;

