import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
`;

export const GallerySlides = styled.div`
  display: flex;
  overflow: hidden;
  width: 70vw;
  height: 50rem;
  position: relative;
  transition: 0.7s ease-in;
  flex: 0;
`;

export const GallerySlide = styled.div`
  min-width: 100%;
  height: 100%;
  transition: 0.7s ease-in-out;
`;

export const GallerySlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

// thumbs

export const GalleryThumbs = styled.div`
  width: 70vw;
  margin-top: 1rem;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const GalleryThumbsImgContent = styled.div`
  width: 10rem;
  margin: 0 0.5rem;

  cursor: pointer;
`;
export const GalleryThumbsImg = styled.img`
  width: 10rem;
  height: 100%;
  border: ${({ isActive }) => (isActive ? ".4rem solid #f03a47" : "0")};
`;
