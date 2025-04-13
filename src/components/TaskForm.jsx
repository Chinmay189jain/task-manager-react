import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import styles from '../styles/TaskForm.module.css';

const TaskForm = () => {

    const [text, setText] = useState("");
    const { addTask } = useContext(TaskContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim()) {
            addTask({ id: Date.now(), text, completed: false });
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder='Add a task'></input>
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;