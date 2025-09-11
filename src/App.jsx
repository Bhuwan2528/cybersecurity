import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Quote from './Components/Quote/Quote'
import President from './Components/President/President'
import Programs from './Components/Programs/Programs'
import Collaboration from './Components/Collaboration/Collaboration'
import Association from './Components/Association/Association'
import Community from './Components/Community/Community'
import Gallery from './Components/Gallery/Gallery'
import Footer from './Components/Footer/Footer'

import './App.css'

const App = () => {
  const cursorRef = useRef(null)
  const [cursorText, setCursorText] = useState("")

  // ✅ AOS initialize
  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true,    // ek hi baar trigger hoga
    });
  }, []);

  // ✅ Cursor move logic
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // ✅ Hover animations
  const handleEnter = () => {
    setCursorText("View More");
    gsap.to(cursorRef.current, {
      width: 100,
      height: 100,
      duration: 0.2,
      ease: "power2.out",
      backgroundColor: '#7c32d1c9',
    });
  };

  const handleLeave = () => {
    setCursorText("");
    gsap.to(cursorRef.current, {
      width: 20,
      height: 20,
      duration: 0.2,
      ease: "power2.out",
      backgroundColor: '#7c32d1',
    });
  };

  return (
    <div>
      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}>
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>

      <Header />
      <Hero />
      <Quote />
      <President />
      <Programs />

      {/* ✅ Collaboration Section with cursor hover */}
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}   // 👈 yaha fix kiya
      >
        <Collaboration />
      </div>

      <Association />
      <Community />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
