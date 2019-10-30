import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, img, species }) => (

  <li className={styles.Character}>
    <h1>Name: {name}</h1>
    <img src={img}/>
    <p>Species: {species}</p>
  </li>

);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Character;
