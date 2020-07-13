import React from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import Modal from './components/Modal';

function App() {
  return (
  <div className="main-container">
    <Top />
    <Middle />
    <Bottom />
    <Modal />
  </div>
);
}

export default App;
