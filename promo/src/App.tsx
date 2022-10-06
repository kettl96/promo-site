import React from 'react';
import About from './about/About';
import Chat from './chat/Chat';
import Header from './header/Header';
import Main from './main/Main';
import Project from './project/Project';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Project />
      <About />
      <Chat />
    </div>
  );
}

export default App;
