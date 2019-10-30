import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import styles from './App.css';

const App = () => (
  <React.Fragment>
    <Header />
    <div className={styles.App}>

      <Character 
        name='Rick Sanchez'
        img='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        species='Human' />

      <Character 
        name='Morty Smith'
        img='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        species='Human' />

      <Character
        name='Summer Smith'
        img='https://rickandmortyapi.com/api/character/avatar/3.jpeg'
        species='Human' />

      <Character
        name='Beth Smith'
        img='https://rickandmortyapi.com/api/character/avatar/4.jpeg'
        species='Human' />

      <Character
        name='Jerry Smith'
        img='https://rickandmortyapi.com/api/character/avatar/5.jpeg'
        species='Human' />

      <Character
        name='Abadango Cluster Princess'
        img='https://rickandmortyapi.com/api/character/avatar/6.jpeg'
        species='Alien' />
    
      <Character
        name='Abradolf Lincler'
        img='https://rickandmortyapi.com/api/character/avatar/7.jpeg'
        species='Human' />
    
      <Character
        name='Adjudicator Rick'
        img='https://rickandmortyapi.com/api/character/avatar/8.jpeg'
        species='Human' />
    
      <Character
        name='Agency Director'
        img='https://rickandmortyapi.com/api/character/avatar/9.jpeg'
        species='Human' />
    
      <Character
        name='Alan Rails'
        img='https://rickandmortyapi.com/api/character/avatar/10.jpeg'
        species='Human' />
      <Footer />
    </div>
  </React.Fragment>
);

export default App;
