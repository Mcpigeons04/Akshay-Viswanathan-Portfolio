import React, { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const aniRef = useRef(null);

  useEffect(() => {
    const texts = ["Engineer", "Developer", "Coder"];
    let currentIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      if (deleting) {
        aniRef.current.textContent = texts[currentIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          currentIndex = (currentIndex + 1) % texts.length;
          setTimeout(type, 800);
        } else {
          setTimeout(type, 100);
        }
      } else {
        aniRef.current.textContent = texts[currentIndex].substring(
          0,
          charIndex + 1
        );
        charIndex++;

        if (charIndex === texts[currentIndex].length) {
          deleting = true;
          setTimeout(type, 1000);
        } else {
          setTimeout(type, 200);
        }
      }
    };

    type();

    return () => clearTimeout(type);
  }, []);

  return (
    <div id="about">
      <div className="content">
        <div className="text">
          <p>Hello, I am</p>
          <h1>Pranjal Kumar</h1>
          <p>
            And I am
            <span id="ani" ref={aniRef}></span>
          </p>
          <a href="https://drive.google.com/file/d/1cfcrERkuGTBBwX8m30uPw2brPgaRSiKm/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
