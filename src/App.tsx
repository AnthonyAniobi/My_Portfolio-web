import React from 'react';
import './App.css';
import Laptop from './components/laptop/Laptop';
import Android from './components/android/Android';
import Server from './components/server/Server';

function App() {
  return (
    <div>
      <Server />
      <Laptop />
      <Android />
    </div>
  );
}

export default App;
