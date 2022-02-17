import styled from "styled-components";

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 17px;

  section {
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    width: 100%;
    border-top: 2px solid;
    border-color: #021323;
    max-width: 800px;
  }
`;

export const Title = styled.h2`
  border-top: 2px solid;
  border-color: red;
  padding: 10px;
  align-self: center;
  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: left;
  text-indent: 10px;
`;

export const ContactUS = styled.address`
  line-height: 25px;
  font-family: Arial, Helvetica, sans-serif;
  align-self: start;
  a {
    margin-left: 10px;
    white-space: nowrap;

    text :visited {
      color: blue;
    }
  }
`;

export const SpanBold = styled.span`
  font-weight: bold;
`;
