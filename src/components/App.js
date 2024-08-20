import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';
import NewTaskForm from './components/NewTaskForm';
import './App.css';

// Sample data
const TASKS = [
  { id: 1, text: 'Do the dishes', category: 'Chores' },
  { id: 2, text: 'Read a book', category: 'Leisure' },
  { id: 3, text: 'Work on project', category: 'Work' }
];

const CATEGORIES = ['All', 'Chores', 'Leisure', 'Work'];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;

