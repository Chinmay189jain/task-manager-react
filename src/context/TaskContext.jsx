import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const addTask = task => setTasks([...tasks, task]);
    const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));
    const toggleTask = id => setTasks(
        tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
            {children}
        </TaskContext.Provider>
    )
}