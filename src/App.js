import React from 'react';
import './App.css';
import Header from './components/Header';
import Aboutcontent from './components/About';
import ResumeWork from './components/Resume';
import Portfoliowork from './components/Portfolio';
import Testimonialwork from './components/Testimonials';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Header/>
      <Aboutcontent/>
      <ResumeWork/>
      <Portfoliowork/>
      <Testimonialwork/>
      <Contact/>
    </div>
  );
}

export default App;
