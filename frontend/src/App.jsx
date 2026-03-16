import './App.css';

import Button from './components/buttons/buttons.jsx';
import Heading from './components/heading/heading.jsx';
import ImageSlider from './components/allImage/allImage.jsx';
import Modal from './components/modal/modal.jsx';

import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(){
    setIsModalOpen(true);
  }
  return (
    <div className="container">
        <Heading heading="This is me" subHeadingEnd=", still standing 📅" />
        <nav>
            <Button onClick={handleOpenModal} text="About me" btnSizing="fixed"/>
        </nav>
        <ImageSlider totalImages={16} imageExtension={"jpg"}/>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h1>
            Kobus van Schalkwyk
          </h1>
          <p>
            The world is full of problems waiting to be solved - and I‘m here to solve them. <br /><br />

            Whether it’s writing code to automate a process or 3d printing a physical solution, I love seeing my 
            work come to life and solve a real problem.
          </p>
        </Modal>
        
    </div>

  );
}

export default App;