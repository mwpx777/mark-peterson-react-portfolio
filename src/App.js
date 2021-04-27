
import './index.css';

import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {

  const[contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    // {
    //   name: "Home",
    //   description: "Home"
    // },
    // {
    //   name: 'Bio',
    //   description: "Mark's Biography"
    // },
    {
      name: 'Web Dev',
      description: 'Web Development Projects'
    },
    {
      name: 'Graphic Design',
      description: 'Graphic Design Portfolio'
    },
    {
      name: 'Contact Me'

    }

  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div >
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />

      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;