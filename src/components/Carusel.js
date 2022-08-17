import React, { Component } from 'react'
import Slider from "react-slick";
import taxi from ".././images/taxsi.webp";
import bajak from ".././images/bajak.webp";
import buys from ".././images/buys.jpeg";
import caxik from ".././images/caxik.webp";
import cov from ".././images/cov.jpeg";
import dur from ".././images/dur.jpeg";
import dzi from ".././images/dzi.jpeg";
import jampa from ".././images/jampa.jpeg";
import opshag from ".././images/opshag.jpeg";
import pat from ".././images/pat.jpeg";
import qaxcr from ".././images/qaxcr.jpeg";

export default class Carusel extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className='caruselDiv'>
          <Slider {...settings}>
            <div className="slidePiece">
              <h3>Taxi</h3>
              <img src={taxi} className="imgSlidere" alt='' />
            </div>
            <div className="slidePiece">
              <h3>Cup</h3>
              <img src={bajak} className="imgSlidere" alt='' />
              
            </div>
            <div className="slidePiece">
              <h3>Plant</h3>
              <img src={buys} className="imgSlidere" alt='' />

            </div>
            <div className='slidePiece'>
              <h3>Road</h3>
              <img src={jampa} className="imgSlidere" alt='' />
            </div>
            <div className='slidePiece'>
              <h3>Sea</h3>
              <img src={cov} className="imgSlidere" alt='' />
            </div>
            <div className='slidePiece'>
              <h3>Flower</h3>
              <img src={caxik} className="imgSlidere" alt='' />
            </div>
            <div className="slidePiece">
              <h3>Door</h3>
              <img src={dur} className="imgSlidere" alt='' />
            </div>
            <div className="slidePiece">
              <h3>Horse</h3>
              <img src={dzi} className="imgSlidere" alt='' />
            </div>
            <div className="slidePiece">
              <h3>Structure</h3>
              <img src={opshag} className="imgSlidere" alt='' />
            </div>
            <div className="slidePiece">
              <h3>Wall</h3>
              <img src={pat} className="imgSlidere" alt='' />
            </div>
          </Slider>
        </div>
      );
    }
  }
