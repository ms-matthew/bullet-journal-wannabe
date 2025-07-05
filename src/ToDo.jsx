import React, { useState } from 'react';
import AddElem from './AddElem';

const ToDo = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks((prev) => [...prev, taskText]);
  };

  return (
    <div>
      <p className="md:text-2xl text-red-500">
        ToDo List <br /> {children}:
      </p>

      <AddElem onAdd={addTask} />

      <ul className="mt-4 list-disc list-inside text-gray-700">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
