import React from 'react';
import './App.css';
import {useQuery, gql} from '@apollo/client';
import Banner from './components/Banner';


export default function App() {
  return (
    <div className="App">
      <Banner title="Your mission if you choose to accept it!" name="Lisa" mission="Island of Death" respond={10} />
    </div>
  );
}

