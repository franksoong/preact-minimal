import { h } from 'preact';

import styles from './header.css';

const Header = (props) => (
    <header className={styles['header']}>
        <h1>{ props.title }</h1>
    </header>
);

export default Header;
