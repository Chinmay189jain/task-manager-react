import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import styles from '../styles/TaskList.module.css';

const TaskList = () => {

    const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

    return (
        <ul className={styles.list}>
            {tasks.map(task => (
                <li key={task.id} className={task.completed ? styles.completed : ''}>
                    <span onClick={() => toggleTask(task.id)}>{task.text}</span>
                    <button onClick={() => deleteTask(task.id)}>❌</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;