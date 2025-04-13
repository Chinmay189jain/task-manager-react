import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => (
    <div>
        <TaskForm />
        <TaskList />
    </div>
);

export default Home;