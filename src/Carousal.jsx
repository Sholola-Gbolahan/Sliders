import React, { useEffect, useState } from "react";
import { shortList, longList, list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousal = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(2)

  const checkNumber = (number) => {
    if( number > people.length -1){
      return 0
    }

    if( number < 0){
      return people.length -1 
    }

    return number;

  }

  const prevSlide = () =>{

    setCurrentPerson((oldPerson)=>{
      const result = oldPerson - 1
      return checkNumber(result)

    })
  }

  const nextSlide = () =>{

    setCurrentPerson((oldPerson)=>{
      const result = oldPerson + 1
      return checkNumber(result)

    })
    
  }

  useEffect(()=>{

    const slideId = setInterval(()=>{
      nextSlide()
    },2000)
 return () => {
  clearInterval(slideId)
 }

  },[currentPerson])

  return (
    <section className="slider-container">
      {people.map((person ,personIndex) => {
        const { id, image, name, quote, title } = person;

        return (
          <article className="slide "  style={{transform:`translateX(${100 *( personIndex - currentPerson )}%)`,
          opacity: personIndex === currentPerson ? 1 : 0,
          visibility: personIndex === currentPerson ? 'visible' : 'hidden'
          
          }} key={id}>
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
