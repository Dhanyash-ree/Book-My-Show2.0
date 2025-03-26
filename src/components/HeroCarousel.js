import React from "react";
import { Carousel } from "react-bootstrap";

import "./HeroCarousel.css";



const featuredItems = [
  {
    title: "Dune: Part Two",
    img: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
  },
  {
    title: "Godzilla x Kong: The New Empire",
    img: "/images/Godzilla-Kong.jpeg",
  },
  {
    title: "IPL 2025 Finals",
    img: "/images/IPL.jpg",
  },
  {
    title: "Coldplay Live - World Tour",
    img: "/images/coldplay.jpg",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel fade interval={1000}>
      {featuredItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.img} alt={item.title} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};




export default HeroCarousel;
