import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;

  padding: 25px;
  justify-content: space-between;
`;

export const NavbarPageName = styled.h1`
  font-size: 2.5rem;
  color: #1b212d;
  font-weight: 600;
`;

export const NavbarProfileButton = styled.div`
  width: 10vw;
  border-radius: 100px;
  background-color: #fafafa;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavbarProfileButtonName = styled.p`
  color: #1b212d;
  font-weight: 400;
  font-size: 0.95rem;
`;
