import Header from '../Header/Header';
import Top from '../Top/Top';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './App.css';

// import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';
import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

function App() {
  // ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    // sets browsers viewport
    root: null,
    // determines when animation starts in section
    rootMargin: '0px',
    // number represents what the targets visibility is before animation. 1 is 100%
    threshold: 0.45
  });

  // animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power1.out",
      duration: 2,
      stagger: {
        amount: 0.3
      }
    })
  };

  // animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power1.out",
      duration: 2,
    })
  };

  // checking to see when the viewport is visible to the user
  intersection && intersection.intersectionRatio < 0.45
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn');


  return (
    <div className="App">
      <Header />

      <Top />

      <About sectionRef={sectionRef}/>

      <Skills />

      <Work />

      <Contact />
    </div>
  );
}

export default App;
