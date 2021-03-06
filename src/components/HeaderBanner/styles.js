// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const BannerContainer = styled.div`
//   position: relative;
//   height: 45rem;
//   padding: 1rem 0 0 0;
//   background: transparent;
//   scroll-behavior: smooth;
//   overflow-x: hidden;
//   box-shadow: 0 0.4rem 2rem #000;
// `;

// const BannerCarousel = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   margin: auto;
// `;

// const BannerSlider = styled.div`
//   flex: 0 0 auto;
//   position: relative;
//   border-radius: 0.5;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   overflow: hidden;
// `;

// const SliderImg = styled.img`
//   width: 60%;
//   min-height: 100%;
//   object-fit: cover;
//   display: block;
//   margin-left: auto;

//   @keyframes animate {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
//   animation: animate 0.5s ease-in-out;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// const SliderContent = styled.div`
//   position: absolute;
//   width: 50%;
//   height: 100%;
//   z-index: 2;
//   background: linear-gradient(to right, #030b17 80%, #0c111b00);
//   color: #fff;
// `;

// const SliderContentTitle = styled.h1`
//   max-width: 80%;

//   padding-left: 8rem;
//   font-family: "Roboto", sans-serif;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 3.4rem;
//   text-transform: capitalize;
//   margin-top: 80px;
//   color: #fff;
// `;

// const SliderContentDesc = styled.p`
//   width: 80%;
//   font-family: "Roboto", sans-serif;
//   font-size: 1.6rem;
//   line-height: 3rem;
//   padding-left: 8rem;
//   margin: 3rem 0;
//   opacity: 0.8;
// `;

// const ButtonMore = styled(Link)`
//   padding: 1rem 3rem;
//   text-decoration: none;
//   border: 0.2rem solid #fff;
//   color: #000;
//   font-family: "Inter", sans-serif;
//   font-weight: 600;
//   border-radius: 0.5rem;
//   background-color: #fff;
//   font-size: 2.4rem;
//   transition: all 0.3s ease;
//   cursor: pointer;

//   position: absolute;
//   left: 8rem;
//   bottom: 2rem;

//   &:hover {
//     background: transparent;
//     color: #fff;
//   }
// `;

// const HandleSlide = styled.div`
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   background-color: #fff;
//   padding: 1rem;
//   position: absolute;
//   bottom: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 999;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// export {
//   BannerContainer,
//   BannerCarousel,
//   BannerSlider,
//   SliderImg,
//   SliderContent,
//   SliderContentTitle,
//   SliderContentDesc,
//   ButtonMore,
//   HandleSlide,
// };
