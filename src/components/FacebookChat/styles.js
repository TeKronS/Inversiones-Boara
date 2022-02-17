import styled from "styled-components";

export const Body = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;
  cursor: pointer;
  z-index: 2;

  img {
    width: 55px;
    height: 55px;
    transition: 250ms ease-in 0s;

    :hover {
      width: 66px;
      height: 66px;
    }
  }
`;
