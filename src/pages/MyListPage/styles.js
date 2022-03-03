import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
`;

export const ItemContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

export const ItemList = styled.li`
  width: 40rem;
  height: 28rem;

  display: flex;
  gap: 1rem;
  margin: 2rem 1rem;
`;

export const ItemImg = styled.img`
  width: 18rem;

  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  gap: 0.5rem;
`;

export const ItemTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  color: white;
`;

export const ItemDate = styled.p`
  font-family: "Poppins", sans-serif;
  color: #ffffff80;
  font-style: italic;
  font-size: 1.4rem;
`;

export const DeleteBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: #f03a47;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;
