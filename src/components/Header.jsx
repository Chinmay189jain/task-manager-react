import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <h1>Task Manager</h1>
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink> | <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        </nav>
    </header>
);

export default Header;