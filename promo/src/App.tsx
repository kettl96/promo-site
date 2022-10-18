import React from 'react';
import About from './about/About';
import Chat from './chat/Chat';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Project from './project/Project';

function App() {
  const [loading, setLoading] = React.useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      {!loading &&
        <div>
          <Header />
          <Main />
          <Project />
          <About />
          <Chat />
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
