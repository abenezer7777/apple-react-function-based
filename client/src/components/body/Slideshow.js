import React, { useEffect } from "react";
import image1 from "../../image/pic/1960x1102 (1).jpg";
import image2 from "../../image/pic/1960x1102.jpg";
import image3 from "../../image/pic/2638x1484sr.webp";

export default function Slideshow() {
  useEffect(() => {
    return () => {
      let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }
    };
  }, []);
  // (function () {
  //   let slideIndex = 0;
  //   showSlides();

  //   function showSlides() {
  //     let i;
  //     let slides = document.getElementsByClassName("mySlides");
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     slideIndex++;
  //     if (slideIndex > slides.length) {
  //       slideIndex = 1;
  //     }
  //     slides[slideIndex - 1].style.display = "block";
  //     setTimeout(showSlides, 2000); // Change image every 2 seconds
  //   }
  // })();
  return (
    <div>
      <div className="container carousel slide my-2 " data-ride="carousel">
        <div className="mySlides  carousel-inner">
          <div className="numbertext carousel-item active">
            <img className="d-block w-100" src={image1} alt="" />
          </div>
        </div>

        <div className="mySlides carousel-inner">
          <div className="carousel-item active">
            <img src={image2} alt="" className="d-block w-100" />
          </div>
        </div>

        <div className="mySlides carousel-inner">
          <div className="numbertext carousel-item active">
            <img src={image3} className="d-block w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
