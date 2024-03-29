import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import data from "../Data.js";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title" id="Testimonials">
        <h2>लोकांचं आमच्या बद्दल मत .....</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id,  name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
      {/* Your Opinion Section */}
      {/* <div className="opinion">
        <h3>Your Opinion</h3>
        <p>Share your thoughts and feedback with us!</p> */}
        {/* Add your form or input elements for collecting opinions */}
      {/* </div> */}
    </section>
  );
};

export default Slider;
