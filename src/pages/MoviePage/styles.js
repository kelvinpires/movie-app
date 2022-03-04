import { Link } from "react-router-dom";
import styled from "styled-components";

// export const MoviePageContainer = styled.div`
//   max-width: 100vw;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const MoviePageDetails = styled.div`
//   width: 100%;
//   height: 60%;
//   display: flex;
//   padding: 2rem 4rem;
// `;

// background

export const MoviePageBg = styled.div`
  background: url("${({ bg }) => bg}");
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
`;

// img

// export const MovieImgDiv = styled.div`
//   height: 55rem;
//   width: 45%;
//   border-radius: 0.5rem;
//   z-index: 2;
// `;

// export const MovieImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 0.5rem;
// `;

// // description

// export const MovieDescription = styled.div`
//   width: 100%;
//   height: 100%;
//   z-index: 2;
//   margin: auto 6rem;
//   margin-right: 1rem;
//   display: flex;
//   gap: 2rem;
//   flex-direction: column;
//   justify-content: center;
//   /* background-color: #ccc; */
// `;

// export const MovieTitle = styled.h1`
//   font-size: 4rem;
//   color: white;
//   font-weight: 700;
//   font-family: "Roboto", sans-serif;
//   text-shadow: 0.2rem 0.1rem 0.3rem #1a1a1a;
// `;

// export const MovieInfo = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 3rem;
//   align-items: center;
// `;

// export const MovieCertification = styled.div`
//   min-width: 3rem;
//   height: 3rem;
//   max-width: max-content;
//   padding: 0.3rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-family: "Inter", sans-serif;
//   font-size: 1.8rem;
//   font-weight: 600;
//   border: 0.2rem solid ${({ certificationColor }) => certificationColor};
//   background-color: ${({ certificationColor }) => `${certificationColor}80`};
//   border-radius: 0.3rem;
// `;

// export const MovieRuntimeDiv = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   align-items: center;
// `;

// export const MovieRuntimeSpan = styled.span`
//   font-size: 2rem;
//   font-family: "Poppins", sans-serif;
//   color: #fff;
//   opacity: 0.8;
//   word-spacing: -0.2rem;
// `;

// export const MovieRateDiv = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const MovieRateP = styled.p`
//   font-size: 2.4rem;
//   font-family: "Roboto", sans-serif;
//   color: white;
// `;

// export const MovieReleaseGenre = styled.div`
//   display: flex;
//   max-width: 100%;
//   gap: 1rem;
//   margin: 1rem 0;
// `;

// export const MovieReleaseDate = styled(MovieRuntimeSpan)`
//   font-size: 2rem;
// `;

// export const MovieGenresDiv = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-left: 4rem;
// `;

// export const MovieGenre = styled(Link)`
//   border-radius: 0.5rem;
//   background: #09203f;
//   color: #f5f5f5;
//   padding: 1rem 2rem;
//   font-size: 1.6rem;
//   font-family: "Inter", sans-serif;
//   font-weight: 500;
//   text-decoration: none;

//   &:hover {
//     filter: brightness(1.2);
//   }
// `;

// export const MovieTagLine = styled.h3`
//   opacity: 0.8;
//   font-size: 1.8rem;
//   color: white;
//   font-family: "Poppins", sans-serif;
//   font-weight: 400;
//   font-style: italic;
//   text-shadow: 0.1rem 0.1rem 0.3rem #1a1a1a;
// `;

// export const SinopseSbt = styled.h2`
//   font-size: 2.6rem;
//   font-family: "Inter", sans-serif;
//   font-weight: 600;
//   color: white;
// `;

// export const SinopseContent = styled.p`
//   font-size: 1.6rem;
//   font-family: "Open Sans", sans-serif;

//   color: white;
//   opacity: 0.9;
//   line-height: 1.5;
//   text-shadow: 0.1rem 0.1rem 0.3rem #1a1a1a;
// `;

// // streams

// export const MovieStreamsSbt = styled(SinopseSbt)``;

// export const MovieStreamsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;
// export const MovieStreamTitle = styled(SinopseContent)`
//   font-size: 1.4rem;
//   text-align: center;
// `;

// // trailer

// export const SeeTrailer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// export const PlayTrailer = styled.h3`
//   font-size: 2rem;
//   color: #f5f5f5;
//   font-family: "Inter", sans-serif;
// `;

// // Cast

// export const MovieCastContainer = styled.div`
//   height: 40%;
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-wrap: wrap;
//   padding: 2rem;
//   gap: 2rem;
// `;

// export const MovieCastItem = styled.div`
//   width: 20rem;
//   height: 25rem;
// `;

// // avaliaçao

// export const VoteDiv = styled.div`
//   width: 7rem;
//   height: 7rem;
//   border-radius: 50%;
//   padding: 0.5rem;

//   ${({ bgColor }) => bgColor}/* background-color: #7ee8fa;
//   background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%); */
// `;

// export const VoteDone = styled.div`
//   width: 100%;
//   height: 100%;
//   color: #fff;
//   font-family: "Roboto", sans-serif;
//   font-size: 2.6rem;
//   font-weight: 600;
//   padding: 0.4rem;
//   border-radius: 50%;
//   background: #15202b;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// // lista

// export const AddListBtn = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   font-size: 1.6rem;
//   font-family: "Roboto", sans-serif;
//   width: max-content;
//   padding: 0.8rem 1rem 0.8rem 0.5rem;
//   border-radius: 0.5rem;
//   background-color: #f03a47;
//   box-shadow: 0 0.1rem 0.3rem #1a1a1a;
//   color: white;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     filter: brightness(1.1);
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;
