import React, { useState, useRef, useEffect } from "react";
import {
  GalleryContainer,
  GallerySlide,
  GallerySlideImg,
  GallerySlides,
  GalleryThumbs,
  GalleryThumbsImg,
  GalleryThumbsImgContent,
} from "./styles";

const Thumbnails = ({ arrImgs = [], currentSlide, nextSlide }) => {
  const thumbRef = useRef();

  function nextThumb(i) {
    thumbRef.current.scrollLeft = i * 100;
  }

  return (
    <GalleryThumbs ref={thumbRef}>
      {arrImgs.map((img, index) => (
        <GalleryThumbsImgContent
          key={index}
          onClick={() => {
            nextSlide(index);
            nextThumb(index);
          }}
        >
          <GalleryThumbsImg
            isActive={currentSlide == index}
            src={`https://image.tmdb.org/t/p/w185${img.file_path}`}
          />
        </GalleryThumbsImgContent>
      ))}
    </GalleryThumbs>
  );
};

export const Gallery = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images?.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  return (
    <GalleryContainer>
      <GallerySlides>
        {images.map((image, index) => (
          <GallerySlide
            key={index}
            style={{
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          >
            <GallerySlideImg
              src={`https://image.tmdb.org/t/p/w1280${image.file_path}`}
            />
          </GallerySlide>
        ))}
      </GallerySlides>
      <Thumbnails
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        arrImgs={images}
      />
    </GalleryContainer>
  );
};

// https://image.tmdb.org/t/p/original${image.file_path}
