import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  text-align: center;
  h5 {
    color: red;
    margin: 20px 0;
  }
  p {
    font-weight: bold;
  }
  div {
    margin: 20px 0;
    display: flex;
    gap: 20px;
  }
  a {
    display: flex;
    border-radius: 5px;
    cursor: pointer;
    flex: 1;
    font-size: 20px;
    padding: 10px;
    background: #f4f4f4;
    border: 1px solid;
    box-shadow: 3px 2px 5px black;
    :visited {
      color: black;
    }
    :hover {
      background: rgb(200, 200, 200);
    }
    span {
      margin: auto;
    }
  }
`;
