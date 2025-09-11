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

  // For AOS

    useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      once: true,    // ek hi baar trigger hoga
    });
  }, []);

  const cursorRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorText, setCursorText] = useState("")

  // Track mouse position
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  // Update cursor position (use left/top instead of x/y)
  useEffect(() => {
    gsap.to(cursorRef.current, {
      left: position.x,
      top: position.y,
      duration: 0.15,
      ease: "power2.out",
    })
  }, [position])

  // Animate cursor on section hover
  const handleEnter = () => {
  setCursorText("View More")
  gsap.to(cursorRef.current, {
    width: 100,
    height: 100,
    duration: 0.1,
    ease: "power2.out",
    backgroundColor: '#7c32d1c9',
  })
}

const handleLeave = () => {
  setCursorText("")
  gsap.to(cursorRef.current, {
    width: 20,
    height: 20,
    duration: 0.1,
    ease: "power2.out",
      backgroundColor: '#7c32d1',
  })
}

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

      {/* Collaboration Section with hover effect */}
      <div
          onMouseEnter={handleEnter}
          onMouseOut={handleLeave}
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
