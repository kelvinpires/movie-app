import styled from "styled-components";

const HeaderMenu = styled.header`
  max-width: 100vw;
  max-height: 8rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #030b17;
  background-color: transparent;
  position: relative;
  z-index: 997;

  :hover {
    background-color: #030b17;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
`;

const LogoName = styled.h1`
  font-size: 3rem;

  color: #f7f9f9;
  font-family: "Lato", sans-serif;
`;

const InputSearchDiv = styled.div`
  display: flex;
  align-items: center;
  background: #10161d90;
  gap: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  max-width: 60rem;
  max-height: 8rem;
  width: 100%;
  transition: all 0.4s ease;
`;

const InputSearch = styled.input`
  border: none;
  font-size: 1.8rem;
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 1rem;
  outline: none;
  color: #fff;

  &::placeholder {
    color: white;
  }
`;

export { HeaderMenu, LogoDiv, LogoName, InputSearch, InputSearchDiv };
