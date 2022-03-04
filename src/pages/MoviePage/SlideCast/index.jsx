import React, { useEffect, useRef } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

function SlideCast({ cast }) {
  let scrollFinal = 0;
  const carousel = useRef();

  useEffect(() => {
    carousel.current.scrollLeft = 0;
    scrollFinal = 0;
  }, [cast]);

  const handleScrollLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    scrollFinal--;
    if (scrollFinal < 0) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * cast.length;
      scrollFinal = cast.length - 1;
    }
  };

  const handleScrollRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    scrollFinal++;

    if (scrollFinal == cast.length) {
      carousel.current.scrollLeft = 0;
      scrollFinal = 0;
    }
  };

  return (
    <div className="slide-container">
      <h2 className="slider-genre-name" children="Elenco principal" />
      <div className="slide-carousel" ref={carousel}>
        <button
          className="slide-button"
          style={{ left: 0 }}
          onClick={handleScrollLeft}
        >
          <MdOutlineNavigateBefore size="4rem" color="white" />
        </button>
        {cast?.map((act) => {
          const actImg =
            act.profile_path !== null
              ? `https://www.themoviedb.org/t/p/w342/${act.profile_path}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT05fi8hhDM3K386lZ1X5ohWlolSJV71FgMPySBO4XC9dcm5jD2AVAdd8gtRbgOQ-FdM&usqp=CAU";
          return (
            <div className="slide-item" key={act.name}>
              <img className="slide-img" src={actImg} alt={act.name} />
              <div
                style={{
                  width: "100%",
                  height: "max-content",
                  textAlign: "center",
                  background: "#f4f4f4",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: ".5rem 0",
                }}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    fontFamily: "Inter",
                    lineHeight: 2,
                  }}
                >
                  {act.name}
                </p>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontFamily: "Roboto",
                    marginTop: "1rem",
                  }}
                >
                  {act.character}
                </p>
              </div>
            </div>
          );
        })}
        <button
          className="slide-button"
          style={{ right: 0 }}
          onClick={handleScrollRight}
        >
          <MdOutlineNavigateNext size="4rem" color="white" />
        </button>
      </div>
    </div>
  );
}

export { SlideCast };
