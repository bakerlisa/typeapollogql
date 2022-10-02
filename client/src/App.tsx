import React from 'react';
import './App.css';
import {useQuery, gql} from '@apollo/client';
import Banner from './components/Banner';

export default function App() {
  return (
    <div className="App">
      <Banner />
    </div>
  );
}

