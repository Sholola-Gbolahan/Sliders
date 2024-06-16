import React, { useState } from "react";
import { shortList, longList, list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousal = () => {
  const [people, setPeople] = useState(list);

  const prevSlide = () =>{

  }

  const nextSlide = () =>{
    
  }

  return (
    <section className="slider-container">
      {people.map((person ,personIndex) => {
        const { id, image, name, quote, title } = person;

        return (
          <article className="slide "  style={{transform:`translateX(${100 * personIndex }%)`}} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button type="button" onClick={prevSlide} className="prev">
        <FiChevronLeft />
      </button>

      <button type="button" onClick={nextSlide  } className="next">
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousal;
